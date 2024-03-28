import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import ShopPage from "./Pages/ShopPage/ShopPage";

import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";

import ProductProvider from "./Context/Productcontext";
import ShopListProvider from "./Context/ShopListcontext.jsx";
import ModalProvider from "./Context/Modalcontext.jsx";
import AuthPage from "./Pages/AuthPage/AuthPage.jsx";
import AuthProvider from "./Context/AuthContext.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <h1>404 Not found </h1>,
  },
  {
    path: "/:id",
    element: <HomePage />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/shopPage",
    element: <ShopPage />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contactUs",
    element: <ContactUs />,
  },
  {
    path: "/shopPage/:id",
    element: <ShopPage />,
  },
  {
    path: "/login",
    element: <AuthPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductProvider>
      <ShopListProvider>
        <ModalProvider>
          <AuthProvider>
            <RouterProvider router={router} />
          </AuthProvider>
        </ModalProvider>
      </ShopListProvider>
    </ProductProvider>
  </React.StrictMode>
);
