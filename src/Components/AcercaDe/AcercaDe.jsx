import React from "react";
import './AcercaDe.css'
import acercaDe_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const AcercaDe = ({setPlayState}) =>{
    return(
        <div className="acercaDe">
            <div className="acercaDe-izq">
                <img src={acercaDe_img} alt="" className="acercaDe-img"/>
                <img src={play_icon} alt="" className="play-icon" onClick={()=>{
                    setPlayState(true)
                }}/>
            </div>
            <div className="acercaDe-der">
            <h3>ACERCA DE NOSOTROS</h3>
            <h2>¡Con Pa'tours, tu viaje es seguro y cómodo!</h2>
            <p>En Pa'tours, nos apasiona llevarte a descubrir lo mejor de nuestro país, siempre con la tranquilidad que mereces. Nuestros servicios incluyen seguro de viajero, cómodos asientos y conductores altamente capacitados para garantizar que llegues a tu destino de forma segura. Además, nuestras camionetas son sometidas a rigurosas inspecciones por expertos en mantenimiento, asegurándonos de que cada viaje sea confiable y placentero. ¡Explora con confianza y disfruta de cada kilómetro con Pa'tours!</p>

            </div>

        </div>
    )
}
export default AcercaDe