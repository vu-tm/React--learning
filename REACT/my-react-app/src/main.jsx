import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Button/App.jsx'
// import AppComponent from './AppComponent-test.jsx'
// import AppProp from './AppProp-test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppComponent /> */}
    {/* <AppProp /> */}
    <App />
  </StrictMode>,
)
