
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/login/LoginScreen'
import { DashboarRoutes } from './DashboarRoutes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

export const AppRouter = () => {
  return (
    <Router>

      <Routes>

        <Route
          path='/login' element={
            <PublicRoute>
              <LoginScreen />
            </PublicRoute>
        }
        />

        {/* <Route path='/login' element={<LoginScreen />} /> */}

        <Route
          path='/*' element={
            <PrivateRoute>
              <DashboarRoutes />
            </PrivateRoute>
        }
        />

        {/* <Route path='/*' element={<DashboarRoutes />} /> */}

      </Routes>
    </Router>
  )
}
