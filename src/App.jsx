


import { Outlet, useLocation } from "react-router"
import { ProductCard } from "./components/cards/Cards"
import './css/index.css'
import { Button } from "./components/buttons/Button"
import { Header } from "./components/header/Header"



function App() {

  const location = useLocation();
    const state = location.state;

  return (
    <>

   <Header/>
    
   <Outlet context={{ background: state?.background }} />    
     
    </>
  )
}

export default App
