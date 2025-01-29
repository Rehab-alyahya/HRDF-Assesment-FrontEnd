import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";
import HomePage from "../pages/HomePage";
import LayoutComponent from "../layout/LayoutComponent";// Make sure to import Layout if you are using it

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutComponent />, // Parent layout component
    children: [
      {
        path: "signin",   // Sign-in page route
        element: <SignInPage />,
      },
      {
        path: "home",     // Home page route
        element: <HomePage />,
      },
      {
        path: "signup",     // Home page route
        element: <SignUpPage />,
      },
    ],}

]);
