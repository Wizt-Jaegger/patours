import React, { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Presentacion from "./Components/Presentacion/Presentacion";
import Titulo from "./Components/Titulo/Titulo";
import AcercaDe from "./Components/AcercaDe/AcercaDe";
import Galeria from "./Components/Galeria/Galeria";
import Testimonios from "./Components/Testimonios/Testimonios";
import Contacto from "./Components/Contacto/Contacto";
import Footer from "./Components/Footer/Footer";
import Maps from "./Components/Maps/Maps";
import ReproductorVideo from "./Components/ReproductorVideo/ReproductorVideo";
import ModelosCamionetas from "./Components/ModelosCamionetas/ModelosCamionetas";
import MetodosPago from "./Components/MetodosPago/MetodosPago";
import Banner from "./Components/Banner/Banner";
import fondo1 from "./assets/concierto.jpg";
import fondo2 from "./assets/paisaje.jpg";
import fondo3 from "./assets/aventura.jpg";
//.


const App = () =>{

    const [playState, setPlayState] = useState(false);

    return(
        <div>
            <Navbar/>
            <Presentacion/>
            <Banner texto="¡Te llevamos a tu concierto!" 
                imagenFondo={fondo1} 
            />
            <div className="container">

                <AcercaDe setPlayState={setPlayState}/>
                <Titulo subTitulo="MODELOS DE CAMIONETAS" titulo="¡Conoce nuestra flota de vehículos!"/>
                <ModelosCamionetas/>
                <Titulo subTitulo="Galeria" titulo="Fotos De Nuestros vehiculos"/>
                <Galeria/>
                
            </div>
            <Banner texto="¡Hacemos de cada viaje una historia única!" 
                imagenFondo={fondo2} 
            />
            <div className="container">
            <Titulo subTitulo="OPINIONES" titulo="Lo Que Dicen Nuestros Clientes"/>
                <Testimonios/>
                <Titulo subTitulo="MÉTODOS DE PAGO" titulo="¡Elige la forma de pago que más te convenga!"/>
                <MetodosPago/>
            </div>
            <Banner texto="¡De la rutina a la aventura con un solo paso!" 
                imagenFondo={fondo3} 
            />
            <div className="container">
                <Titulo subTitulo="Contactanos" titulo="Ponte en Contacto"/>
                <Contacto/>
                <Maps/>
            </div> 
            
            
            <Footer/>
            <ReproductorVideo playState ={playState} setPlayState ={setPlayState}/>
        </div>
    )
}

export default App