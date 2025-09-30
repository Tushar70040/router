import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Profile from './profile.jsx'
import About from './about.jsx'
import { createBrowserRouter, RouterProvider,Route,createRoutesFromElements } from "react-router";
import Home from './App.jsx'
import Spinach from './spinach.jsx'
import Popeye from './popeye.jsx'
import Default from './default.jsx'
import Error from './error.jsx'




/*(const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement : <Error/>//this is error element for handling bad or wrong URLs
  },
  {
    path: "profile/:name", // thiis the params
    element: <Profile />,
   /* children:[ //there the chhildren for nested router
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
    ],*/
 /* },
  {
    path:"about",
    element:<About/>
  }
]);
)*/


//there is another method for creating path
//we can also use the react-router-dom
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} errorElement={<Error/>}/>
      <Route path='/profile' element={<Profile/>} >
            <Route path="spinach" element={<Spinach />} />
                  <Route path="popeye" element={<Popeye />} />
      </Route>
      <Route path="/about" element={<About />} />
    </>
  )
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
