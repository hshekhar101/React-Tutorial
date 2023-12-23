import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from 'react-router-dom'
import CustomComponent from './Components/CustomComponent/CustomComponent.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='customcomponent/:userid' element={<CustomComponent />} /> 
    </Route>
  )
)
// userid is a dynamic parameter
// it's value will be passed to the component as a prop
// the prop name will be the same as the parameter name


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
