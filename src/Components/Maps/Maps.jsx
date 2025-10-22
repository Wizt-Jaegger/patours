import React from 'react';
import './Maps.css'; // Create this CSS file for styling

const Maps = () => {
    const mapUrl = `https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3776.672141424626!2d-99.20359792480117!3d18.812758982338426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ4JzQ1LjkiTiA5OcKwMTInMDMuNyJX!5e0!3m2!1ses!2smx!4v1734942285122!5m2!1ses!2smx`;

    return (
        <div className="map-container">
            <iframe
                src={mapUrl}
                className="minimal-map"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </div>
    );
};

export default Maps;
