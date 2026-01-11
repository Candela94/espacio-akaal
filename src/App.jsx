


import { Outlet, useLocation } from "react-router"

import './css/index.css'

import { Header } from "./components/header/Header"
import ScrollToTop from "./components/scrollToTop/ScrollToTop";


function App() {

  const location = useLocation();
    const state = location.state;

  return (
    <>

   <Header/>
    
   <Outlet context={{ background: state?.background }} />    
   <ScrollToTop />
     
    </>
  )
}

export default App
