import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Profile from './profile.jsx'
import About from './about.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './App.jsx'
import Spinach from './spinach.jsx'
import Popeye from './popeye.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "profile",
    element: <Profile />,
    child:[
      {
        path:"popeye",
        element : <Popeye />
      },
      { 
        path:"spinach",
        element :<Spinach />
      },
    ],
  },
  {
    path:"about",
    element:<About/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
