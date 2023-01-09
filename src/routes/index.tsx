import PageNotFound from "../pages/404/PageNotFound";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import HomePage from "../pages/home/HomePage";
import Product from "../pages/product/Product";
import Products from "../pages/products/Products";
import AdminLayout from "../pages/layout/AdminLayout";
import AdminDashbaord from "../pages/admin/dashboard/AdminDashbaord";
import CreateProducts from "../pages/admin/dashboard/createProducts/CreateProducts";
import CreateDriver from "../pages/admin/dashboard/drivers/CreateDriver";
import AdminLogin from "../pages/admin/dashboard/auth/Login";
import Login from "../pages/user/auth/Login";
import VerifyOtp from "../pages/user/auth/VerifyOtp";
import Register from "../pages/user/auth/Register";
import VerifyEmail from "../pages/user/auth/VerifyEmail";
import ForgetPassword from "../pages/user/auth/ForgetPassword";
import ChangePassword from "../pages/user/auth/ChangePassword";
import UpdatProfile from "../pages/user/auth/UpdatProfile";
import Cart from "../pages/user/cart/Cart";
import WishList from "../pages/user/wishlist/WishList";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <Products /> },
      { path: "/prdoduct:/:id", element: <Product /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Register /> },
      { path: "/verify-otp", element: <VerifyOtp /> },
      { path: "/verify-email", element: <VerifyEmail /> },
      { path: "/forget-password", element: <ForgetPassword /> },
      { path: "/change-password", element: <ChangePassword /> },
      { path: "/update-profile", element: <UpdatProfile /> },
      { path: "/cart", element: <Cart /> },
      { path: "/whishlist", element: <WishList /> },
    ],
    errorElement: <PageNotFound />,
  },
  // for admin
  {
    path: "/",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <AdminDashbaord /> },
      { path: "/add-product", element: <CreateProducts /> },
      { path: "/create-drviers", element: <CreateDriver /> },
    ],
    errorElement: <PageNotFound />,
  },
  { path: "/admin-login", element: <AdminLogin /> },
]);
export default function Routes() {
  return <RouterProvider router={router} />;
}
