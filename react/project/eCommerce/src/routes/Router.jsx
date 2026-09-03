import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layout/MainLayout";
import AuthLayout from "../layout/AuthLayout";
import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/home/Home";
import Products from "../pages/products/ProductList";
import ProductDetail from "../pages/products/ProductDetail";

import Cart from "../pages/cart/Cart";
import Wishlist from "../pages/wishlist/Wishlist";
import Checkout from "../pages/checkout/Checkout";

import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import MyAccount from "../pages/account/MyAccount";
import Profile from "../pages/account/Profile";
import Orders from "../pages/account/Orders";

const router = createBrowserRouter([

{
  path: "/",
  element: (
    <ProtectedRoute>
      <MainLayout />
    </ProtectedRoute>
  ),

  children: [
    { index: true, element: <Home /> },

    { path: "products", element: <Products /> },

    { path: "products/:id", element: <ProductDetail /> },

    { path: "cart", element: <Cart /> },

    { path: "wishlist", element: <Wishlist /> },

    { path: "checkout", element: <Checkout /> },

    { path: "account", element: <MyAccount /> },

    { path: "profile", element: <Profile /> },

    { path: "orders", element: <Orders /> },
  ]
},

{
  path: "/auth",
  element: <AuthLayout />,
  children: [
    { path: "login", element: <Login /> },
    { path: "register", element: <Register /> }
  ]
}

]);

export default router;