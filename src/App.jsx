import { useEffect, useReducer } from 'react'
import { AuthContext } from './auth/authContext'
import { authReducer } from './auth/authReducer'
import { AppRouter } from './routers/AppRouter'

const init = () => {
  return JSON.parse(window.localStorage.getItem('user')) || { logged: false }
}

function App () {
  const [user, dispatch] = useReducer(authReducer, {}, init)

  useEffect(() => {
    user && window.localStorage.setItem('user', JSON.stringify(user))
  }, [user])

  return (
    <AuthContext.Provider
      value={{
        user,
        dispatch
      }}
    >
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App
