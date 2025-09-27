import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './profile.jsx'
import About from './about.jsx'
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from './App.jsx'
import Spinach from './spinach.jsx'
import Popeye from './popeye.jsx'
import Default from './default.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "profile",
    element: <Profile />,
    children:[
      {index:true,
        element:<Default/>
        
      },
      {
        path:"spinach",
        element : <Spinach />
      },
      { 
        path:"popeye",
        element :<Popeye />
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
