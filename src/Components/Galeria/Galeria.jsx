import React, { useState } from "react";
import './Galeria.css';
import galeria_1 from '../../assets/gallery-1.png';
import galeria_2 from '../../assets/gallery-2.png';
import galeria_3 from '../../assets/gallery-3.png';
import galeria_4 from '../../assets/gallery-4.png';
import flechaBlanca from '../../assets/dark-arrow.png';

const Galeria = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (
        <div className="galeria">
            <div className="gallery">
                <img 
                    src={galeria_1} 
                    alt="Galería 1" 
                    onClick={() => openModal(galeria_1)} 
                />
                <img 
                    src={galeria_2} 
                    alt="Galería 2" 
                    onClick={() => openModal(galeria_2)} 
                />
                <img 
                    src={galeria_3} 
                    alt="Galería 3" 
                    onClick={() => openModal(galeria_3)} 
                />
                <img 
                    src={galeria_4} 
                    alt="Galería 4" 
                    onClick={() => openModal(galeria_4)} 
                />
            </div>
            <a 
                className="btn" 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                Ver más <img src={flechaBlanca} alt="Flecha blanca" />
            </a>
            {selectedImage && (
                <div className="modal" onClick={closeModal}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <img src={selectedImage} alt="Imagen ampliada" />
                        <button className="close-button" onClick={closeModal}>X</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Galeria;
