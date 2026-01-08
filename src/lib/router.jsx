import { createBrowserRouter } from "react-router";
import App from "../App";

import Inicio from "../pages/inicio/Inicio";
import EspacioAkaal from "../pages/espacio-akaal/EspacioAkaal";
import AkaalRetiros from "../pages/akaal-retiros/AkaalRetiros";
import AkaalViajes from "../pages/akaal-viajes/AkaalViajes";
import UnaVioska from "../pages/una-vioska/Unavioska";
import About from "../pages/acerca-de/About";
import DetalleProducto from "../pages/una-vioska/DetalleProducto";
import ResumenPedido from "../pages/una-vioska/ResumenPedido";
import Privacidad from "../pages/privacy/Privacidad";
import NotFound from "../pages/notFound/NotFound";





const router = createBrowserRouter([{

    path:'/',
    element:<App />,

    children:[

        {
            index:true,
            element:<Inicio /> 
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

        {
            path:'/producto/:pid',
            element:<DetalleProducto />
        },

        {
            path:'/resumen-producto',
            element:<ResumenPedido />
        },

        {
            path: "/privacidad",
            element: <Privacidad />
        },

        {
            path: "*",
            element: <NotFound />
        }
        
        

        

    
    ]
}])


export default router;