import React from 'react';
import './Presentacion.css';
import van_img from '../../assets/patours-van.png';
import flecha_oscura from '../../assets/dark-arrow.png';
import { Link } from "react-scroll";

const Presentacion = () => {
    return(
        <div className='presentacion-container'>
            <div className='presentacion'>
                <div className='presentacion-texto'>
                    <div className='info'>
                        <p class='saludo'>Te gusta viajar?</p>
                        <p class="slogan">¡Viajes <br /> con clase y estilo!</p>
                        <p class='descripcion'>Renta de camionetas turísticas<br />y viajes a toda la República Mexicana</p>
                        <p>
                        <Link
                            to="planes"
                            smooth={true}
                            offset={-260}
                            duration={500}
                            className="button-63"
                        >
                            ¡Descubre más!<img src={flecha_oscura} alt=''/>
                        </Link>
                        </p>
                    </div>
                </div>
                <div className='presentacion-img'>
                    <div className="border">
                        <div className="img-wrapper">
                            <img src={van_img} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Presentacion