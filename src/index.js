import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './estilados/index.css'
import './estilados/App.css'
import {CartProvider}  from './components/Context/Context'

ReactDOM.render(
  <React.StrictMode>
      <CartProvider>
        <App />
    </CartProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

