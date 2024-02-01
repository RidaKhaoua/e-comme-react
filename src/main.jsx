import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import HomePage from "./Pages/HomePage";
import ProfilePage from "./Pages/ProfilePage";
import  ShopPage from "./Pages/ShopPage";

import './index.css'
import AboutUs from './Pages/AboutUs.jsx';
import ContactUs from './Pages/ContactUs.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <h1>404 Not found </h1>
  },
  {
    path: "/profile",
    element: <ProfilePage/>
  },
  {
    path: "/shopPage",
    element: <ShopPage/>
  },
  {
    path: "/aboutUs",
    element:<AboutUs/>
  },
  {
    path: "/contactUs",
    element: <ContactUs/>
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
