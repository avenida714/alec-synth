import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Store from './context/Store.js'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
    <App />
    </Store>
  </React.StrictMode>,
)
