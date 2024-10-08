import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import "@fontsource/outfit"
import"@fontsource/roboto"
import"./i18n.js";




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
