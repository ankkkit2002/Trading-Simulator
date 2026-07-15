import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'



const router = createBrowserRouter([
  {
    path:'/',
    element :<Layout/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}/>
  </StrictMode>,
)
