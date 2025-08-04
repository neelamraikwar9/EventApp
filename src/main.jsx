import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App'
import DetailPage from './DetailPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },

  {
    path: '/meet/:meetId',
    element: <DetailPage />

  }


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
