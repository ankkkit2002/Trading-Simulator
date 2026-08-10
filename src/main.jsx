import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Funds from './Pages/Funds/Funds.jsx'
import Holdings from './Pages/Holdings/Holdings.jsx'
import Dashboard from './Pages/Dashboard/Dashboard.jsx'
import Order from './Pages/Order/Order.jsx'
import Position from './Pages/Position/Position';
import Login from './Login/Login.jsx'
import { Navigate } from 'react-router-dom'

const router = createBrowserRouter([
  {

    path: '/',
    element: <Login/>

  },
  {
    
    element: <Layout />,
    children: [
      {
        path:'dashboard',
        element: <Dashboard />
      },
      {
        path: 'funds',
        element: <Funds />
      },
      {
        path: 'holdings',
        element: <Holdings />
      },
      {
        path: 'dashboard',
        element: <Dashboard />
      },
      {
        path: 'order',
        element:<Order/>
      },
      {
        path: 'positions',
        element:<Position/>
      }
    ]

  }



])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
