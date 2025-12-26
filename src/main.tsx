import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import { CartProvider } from './components/context/CartContext.tsx'
import { BrowserRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import "bootstrap-icons/font/bootstrap-icons.css";


createRoot(document.getElementById('root')!).render(
 <CartProvider>
  <BrowserRouter> 
    <App />
  </BrowserRouter>   
  </CartProvider>
)
