import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import AppComponent from './AppComponent-test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppComponent /> */}
    <App />
  </StrictMode>,
)
