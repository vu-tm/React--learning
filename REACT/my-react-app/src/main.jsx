import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'

// import ActiveBtn from './Button/ActiveBtn.jsx'
// import AppBtn from './Button/AppBtn.jsx'
// import AppStateDuLieu from './Button/AppState-dulieu.jsx'

// import AppBT1 from './BAITAP1/AppBT1.jsx'
import AppBT2 from './BAITAP2/AppBT2.jsx'

// import AppComponent from './AppComponent-test.jsx'
// import AppProp from './AppProp-test.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <AppComponent /> */}
    {/* <AppProp /> */}
    {/* <AppBtn /> */}
    {/* <AppBT1 /> */}
    <AppBT2 />
    {/* <ActiveBtn /> */}
    {/* <AppStateDuLieu /> */}
    {/* <App /> */}
  </StrictMode>,
)
