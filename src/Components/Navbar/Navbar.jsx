import React, { useEffect, useState } from "react";
import './Navbar.css';
import logo from '../../assets/icono.svg';
import menu_icon from '../../assets/menu-icon.png';
import { Link } from "react-scroll";

const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setSticky(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [mobileMenu, setMobileMenu] = useState(false);

    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    return (
        <div>
            {/* Botón flotante para WhatsApp */}
            <a
                className="botonFlotante"
                href="https://wa.me/527771924531"
                target="_blank"
                rel="noopener noreferrer"
                title="¡Quiero inscribirme!"
            >
                <span aria-hidden="true"></span>
                <i className="fab fa-whatsapp"></i>
                <span aria-hidden="true"></span>
            </a>

            {/* Botón flotante para subir */}
            <a
                className={`botonUp ${sticky ? 'dark-botonUp' : ''}`}
                title="¡Pa' arriba!"
            >   <Link to="presentacion" smooth={true} offset={0} duration={800}>
                    <i class='bx bx-chevron-up-circle'></i>
                </Link>
            </a>
            {/* Botón flotante para bajar */}
            <a
                className={`botonDown ${sticky ? 'dark-botonDown' : ''}`}
                title="¡Pa' abajo!"
            >   <Link to="footer" smooth={true} offset={0} duration={1000}>
                    <i className='bx bx-chevron-down-circle'></i>
                </Link>
            </a>

            {/* Navbar */}
            <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <Link to="presentacion" smooth={true} offset={0} duration={500}>
                <img src={logo} alt="logo Sorelu" className="logo" />
            </Link>
                
                <ul className={mobileMenu ? '':'hide-mobile-menu'} >
                    <li className="active">
                        <Link to="presentacion" smooth={true} offset={0} duration={500}>
                            Inicio
                        </Link>
                    </li>
                    <li>
                        <Link to="acercaDe" smooth={true} offset={-150} duration={500}>
                            Acerca de
                        </Link>
                    </li>
                    <li>
                        <Link to="modelosCamionetas" smooth={true} offset={-200} duration={500}>
                            Modelos
                        </Link>
                    </li>
                    <li>
                        <Link to="galeria" smooth={true} offset={-260} duration={500}>
                            Galería
                        </Link>
                    </li>
                    
                    <li>
                        <Link to="testimonios" smooth={true} offset={-260} duration={500}>
                            Opiniones
                        </Link>
                    </li>
                    <li>
                        <Link to="metodosPago" smooth={true} offset={-200} duration={500}>
                            Pago
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contacto"
                            smooth={true}
                            offset={-260}
                            duration={500}
                            className={sticky ? "ghost-btn" : "btn"} 
                        >
                            Contáctanos
                        </Link>
                    </li>

                </ul>
                <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu}/>
            </nav>
        </div>
    );
};

export default Navbar;
