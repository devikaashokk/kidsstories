import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
// import Testingpage from './testingpage.jsx'
// import HeaderPage from './header.jsx'
// import Addition from './addition.jsx'

import RegForm from './RegForm.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Testingpage />
    <HeaderPage/>
    <Addition/> */}
    <RegForm/>
  </StrictMode>,
)
