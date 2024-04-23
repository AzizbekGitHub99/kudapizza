import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import CategoryContextProvider from './contexts/CategoryContext.jsx'

import './index.css'
import CartContextProvider from './contexts/CartContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartContextProvider>
    <CategoryContextProvider>
      <App />
    </CategoryContextProvider>
    </CartContextProvider>
  </React.StrictMode>,
)
