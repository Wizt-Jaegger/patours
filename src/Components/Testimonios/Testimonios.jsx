import React, { useRef } from "react"
import './Testimonios.css'
import siguiente_icon from '../../assets/next-icon.png'
import atras_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'


const Testimonios =() =>{

    const slider = useRef();
    let tx = 0;

    const slideFordward = () =>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () =>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    return(
        <div className="testimonios">
            <img src={siguiente_icon} alt="" className="siguiente-btn" onClick={slideFordward}/>
            <img src={atras_icon} alt="" className="atras-btn" onClick={slideBackward}/>
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>Rosa Valverde</h3>
                                    <span>Cuernavaca, Morelos</span>
                                </div>
                            </div>
                            <p>Pa'tours hizo que nuestro viaje a Hidalgo fuera inolvidable. Me encantaron los paisajes y el clima, que hicieron la experiencia aún más especial. Disfruté del excelente servicio y de explorar los pueblos mágicos. Sin duda, ha sido una de las mejores experiencias que he tenido.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Esteban Contreras</h3>
                                    <span>Jiutepec, Morelos</span>
                                </div>
                            </div>
                            <p>La pasamos excelente en nuestro viaje a la Ciudad de México. Gracias a Pa'tours, visitamos lugares emblemáticos como el Zócalo y Chapultepec sin ningún contratiempo. El servicio fue de primera, ¡100% recomendado! Mis hijos disfrutaron muchísimo explorando los museos y parques, haciendo que el día fuera especial para toda la familia.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Monica Estrada</h3>
                                    <span>Guadalajara, Jalisco</span>
                                </div>
                            </div>
                            <p>Viajamos con Pa'tours a San Cristóbal de las Casas, y fue una experiencia inolvidable. El servicio durante el recorrido fue impecable, y la comida local que probamos fue deliciosa. Aunque el trayecto fue largo, cada parada nos dejó maravillados con la cultura y belleza de Chiapas.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>Juan Quiroga</h3>
                                    <span>Cuernavaca, Morelos</span>
                                </div>
                            </div>
                            <p>Gracias a Pa'tours, celebramos el aniversario de bodas de mis padres en Guadalajara. El ambiente del lugar era espectacular, y el servicio que recibimos durante el viaje fue excelente. Los guías turísticos nos ayudaron a aprovechar al máximo cada sitio que visitamos, haciendo de esta una experiencia inolvidable para toda la familia.</p>
                        </div>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default Testimonios