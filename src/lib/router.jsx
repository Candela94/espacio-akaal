


import { createBrowserRouter } from "react-router";
import App from "../App";
import Inicio from "../pages/inicio/Inicio";
import EspacioAkaal from '../pages/espacio-akaal/EspacioAkaal'
import AkaalRetiros from '../pages/akaal-retiros/AkaalRetiros'
import AkaalViajes from '../pages/akaal-viajes/AkaalViajes'
import UnaVioska from "../pages/una-vioska/Unavioska";
import About from "../pages/acerca-de/About";



const router = createBrowserRouter([{

    path:'/',
    element:<App />,

    children:[

        {
            index:true,
            element:<App /> 
        },

        {
            path: "/inicio",
            element: <Inicio />
        },

        {
            path: "/espacio-akaal",
            element: <EspacioAkaal />
        },


        {

            path: "/akaal-viajes",
            element: <AkaalViajes />
        },

        {
            path: "/akaal-retiros",
            element: <AkaalRetiros/>
        },
        

        {
            path: "/una-vioska",
            element: <UnaVioska />
        },
        

        {
            path: "/about",
            element: <About />
        },
        

        

    
    ]
}])


export default router;