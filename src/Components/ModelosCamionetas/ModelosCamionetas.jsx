import React from "react";
import './ModelosCamionetas.css';

import modelo3 from '../../assets/camioneta3.png';
import modelo4 from '../../assets/camioneta4.png';
import modelo7 from '../../assets/camioneta7.png';

const ModelosCamionetas = () => {
    const modelos = [
        
        { id: 1, img: modelo7, nombre: "Modelo 7 Personas", caracteristicas: ["Amplia capacidad de equipaje", "Sistema de video", "Seguro de viajero", "Operador capacitado"] },
        { id: 3, img: modelo3, nombre: "Modelo Premium", caracteristicas: ["Micrófono para guía", "Localizador GPS", "Operador capacitado", "Seguro de viajero"] },
        { id: 4, img: modelo4, nombre: "Modelo Clásico", caracteristicas: ["Aire acondicionado", "Sistema de audio", "Asientos reclinables", "Seguro de viajero", "Operador capacitado"] },
        
    ];    

    return (
        <div className="modelosCamionetas">
            
            <div className="grid-container">
                {modelos.map(modelo => (
                    <div key={modelo.id} className="card">
                        <img src={modelo.img} alt={modelo.nombre} className="modelo-img" />
                        <h4>{modelo.nombre}</h4>
                        <ul>
                            {modelo.caracteristicas.map((caracteristica, index) => (
                                <li key={index}>{caracteristica}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModelosCamionetas;
