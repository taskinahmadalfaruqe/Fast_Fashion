import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import Router from './Router/Route.jsx'

// Set dark mood as default
const theme = localStorage.getItem('theme');
if (theme === 'dark' || theme === null) {
  document.documentElement.classList.add('dark');
  if (theme === null) {
    localStorage.setItem('theme', 'dark');
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
