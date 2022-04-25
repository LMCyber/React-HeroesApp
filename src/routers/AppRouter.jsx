
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboarRoutes } from './DashboarRoutes'

export const AppRouter = () => {
  return (
    <Router>

      <Routes>

        <Route path='/login' element={<LoginScreen />} />
        <Route path='/*' element={<DashboarRoutes />} />

      </Routes>
    </Router>
  )
}
