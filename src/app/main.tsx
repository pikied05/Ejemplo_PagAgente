import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import '../styles/index.css'
import App from './App'
import { ThankYouPage } from './pages/ThankYouPage'


ReactDOM.createRoot(document.getElementById('root')!).render(

  <React.StrictMode>
    <Router>
      <ThankYouPage />
    </Router>
  </React.StrictMode>,
)
