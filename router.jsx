import { createHashRouter } from "react-router-dom";
import HomePage from "./src/pages/home/HomePage";
import RegisterPage from "./src/pages/register/RegisterPage";
import LoginPage from "./src/pages/login/LoginPage";
import ItemPage from "./src/pages/itemPage/ItemPage";
import PurshasePage from "./src/pages/purshase/PurshasePage";
import ProfilePage from "./src/pages/profile/ProfilePage";
import ProfileEditePage from "./src/pages/profileEdite/ProfileEditePage";
import CreateCompany from "./src/pages/createCompany/CreateCompany";
import Admin from "./src/pages/admin/Admin";
import AdminEdite from "./src/pages/adminEdite/AdminEdite";
import AdminProducts from "./src/pages/adminProducts/AdminProducts";
import CreateProduct from "./src/pages/createProduct/CreateProduct";
import CartPage from "./src/pages/cart/CartPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    element: <ItemPage />,
  },
  {
    path: "/purchase",
    element: <PurshasePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/profileEdite",
    element: <ProfileEditePage />,
  },
  {
    path: "/createCompany",
    element: <CreateCompany />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/adminEdite",
    element: <AdminEdite />,
  },
  {
    path: "/adminProducts",
    element: <AdminProducts />,
  },
  {
    path: "/createProduct",
    element: <CreateProduct />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
]);
///one
