import React from 'react';
import logoFooter from "../../assets/icono.svg";
import "./Footer.css";
import { Link } from "react-scroll";
import logoTechPal from "../../assets/iconoServicios.svg";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-row">
                    {/* Company Section */}
                    <div className="footer-col" id="company">
                        <h3 className="footer-h3">
                            <span className="footer-logo-container">
                                <img src={logoFooter} alt="Logo" className="footer-logo" />
                            </span>
                            <span className="footer-company-name">SA de CV</span>
                        </h3>
                        <div className="footer-links">
                            <a href="/" target="_blank" rel="noopener noreferrer">Política de privacidad</a>
                            <a href="/" target="_blank" rel="noopener noreferrer">Términos y condiciones</a>
                        </div>
                    </div>

                    {/* Services Section */}
                    <div className="footer-col" id="services">
                        <h3 className="footer-h3">Indice web</h3>
                        <div className="footer-links">
                            <a>
                                <Link to="presentacion" smooth={true} offset={0} duration={500}>
                                    Inicio
                                </Link>
                            </a>
                            <a>
                                <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                                    Acerca de
                                </Link>
                            </a>
                            <a>
                                <Link to="modelosCamionetas" smooth={true} offset={-170} duration={500}>
                                     Modelos
                                </Link>
                            </a>
                            <a>
                                 <Link to="galeria" smooth={true} offset={-260} duration={500}>
                                    Galería
                                </Link>
                            </a>
                            <a>
                                <Link to="metodosPago" smooth={true} offset={-170} duration={500}>
                                     Pago
                                </Link>
                            </a>
                            <a>
                                <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                                    Opiniones
                                </Link>
                            </a>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="footer-col" id="contact">
                        <h3 className="footer-h3">Informacion de contacto</h3>
                        <div className="footer-contact-details">
                            <i className="fa fa-location"></i>
                            <p>Calle Benito Juarez s/n Esq. Villa de Tezoyuca<br />Zapata, Mor. Mex</p>
                        </div>
                        <div className="footer-contact-details">
                            <i className="fa fa-phone"></i>
                            <p>+52 777 192 4531</p>
                        </div>
                        
                    </div>
                </div>    

            </div>
            <div className='footer-social'>
            <a className='normalText'>¿Te gustó? Consigue la tuya con nosotros</a>
                <a className='shortText'>hecho por: </a>
                <a href="https://emireyes.com" target="_blank"> 
                    <img src={logoTechPal} alt="" />
                </a>
                                
            </div>
        </footer>
    );
};

export default Footer;
