import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

import AppStateDuLieu from './Button/AppState-dulieu.jsx'
// import AppBT1 from './BAITAP1/AppBT1.jsx'
// import AppBtn from './Button/AppBtn.jsx'
// import AppComponent from './AppComponent-test.jsx'
// import AppProp from './AppProp-test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppComponent /> */}
    {/* <AppProp /> */}
    {/* <AppBtn /> */}
    {/* <AppBT1 /> */}

    <AppStateDuLieu />
    {/* <App /> */}
  </StrictMode>,
)
