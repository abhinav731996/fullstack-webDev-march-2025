import { Routes, Route } from 'react-router-dom'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import Dashboard from '../pages/dashboard/Dashboard'
import Products from '../pages/products/Products'
import Orders from '../pages/orders/Orders'
// import Customers from '../pages/customers/Customers'
import Settings from '../pages/settings/settings'
import NotFound from '../pages/errors/NotFound'
import PrivateRoute from './PrivateRoute'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path='/register' element={<Register />} />

      <Route
        path='/dashboard'
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />

      <Route
        path='/products'
        element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }
      />

      <Route
        path='/orders'
        element={
          <PrivateRoute>
            <Orders />
          </PrivateRoute>
        }
      />

      {/* <Route
        path='/customers'
        element={
          <PrivateRoute>
            <Customers />
          </PrivateRoute>
        }
      /> */}

      <Route
        path='/settings'
        element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>
        }
      />

      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}

export default AppRoutes
