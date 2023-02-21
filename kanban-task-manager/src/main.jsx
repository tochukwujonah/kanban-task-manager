import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"

import './index.css'
import Root from './routes/root'
import { LandingPage, ErrorPage } from './pages'
// import ErrorPage from './pages/ErrorPage/ErrorPage'
import ComponentsContainer from './components/ComponentsCont'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <ErrorPage />
  },
  {
    path: "/components",
    element: <ComponentsContainer />,
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
