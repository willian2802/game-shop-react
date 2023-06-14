import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { SeletorProvider } from "./components/loja";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SeletorProvider>
      <App />
    </SeletorProvider>
  </React.StrictMode>,
)
