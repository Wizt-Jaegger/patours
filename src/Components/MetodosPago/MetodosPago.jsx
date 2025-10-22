import React from "react";
import './MetodosPago.css';
import transferenciaImg from '../../assets/transferencia.png';
import efectivoImg from '../../assets/efectivo.png';

const MetodosPago = () => {
    const metodos = [
        { id: 2, img: transferenciaImg, nombre: "Transferencia Bancaria", descripcion: "Realiza una transferencia desde tu banco de confianza." },
        { id: 3, img: efectivoImg, nombre: "Efectivo", descripcion: "Paga en efectivo al momento de abordar." },
    ];

    return (
        <div className="metodosPago">
            <div className="grid-container">
                {metodos.map(metodo => (
                    <div key={metodo.id} className="card">
                        <img src={metodo.img} alt={metodo.nombre} className="metodo-img" />
                        <h4>{metodo.nombre}</h4>
                        <p>{metodo.descripcion}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MetodosPago;
