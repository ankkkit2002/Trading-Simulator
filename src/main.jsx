import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Funds from './Pages/Funds.jsx'
import Holdings from './Pages/Holdings.jsx'
import Dashboard from './Pages/Dashboard.jsx'
import Order from './Pages/Order.jsx'
import Position from './Pages/Position.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
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
