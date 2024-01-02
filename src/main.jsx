import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "bootstrap/dist/js/bootstrap.js"
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ProductProvider } from './context/productContext.jsx'
import { BasketProvider } from './context/basketContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BasketProvider>
  <ProductProvider>
    <App />
  </ProductProvider>
  </BasketProvider>
)
