import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine';
import './Maps.css';

// --- VARIABLES GLOBALES (MODIFICABLES) ---
const PRECIO_DIESEL_LITRO = 24.50; // Pesos Mexicanos
const RENDIMIENTO_KML = 3.5;       // Kilómetros por litro (promedio camión)
const SALARIO_OPERADOR_HORA = 150; // Pesos por hora
const MARGEN_GANANCIA = 0.30;      // 30%
const HORAS_TRABAJO_POR_DIA = 8;   // Horas base de operación por día de estancia

const Maps = () => {
    const [distancia, setDistancia] = useState(0); // en km
    const [tiempoHoras, setTiempoHoras] = useState(0);
    const [diasEstancia, setDiasEstancia] = useState(1);
    const [totalEstimado, setTotalEstimado] = useState(0);

    // Lógica de cálculo
    useEffect(() => {
        if (distancia > 0) {
            // Ida y vuelta
            const distanciaTotal = distancia * 2;
            const costoCombustible = (distanciaTotal / RENDIMIENTO_KML) * PRECIO_DIESEL_LITRO;
            
            // Tiempo de conducción (ida y vuelta) + tiempo de estancia (días * horas laborales)
            const tiempoTotalLaboral = (tiempoHoras * 2) + (diasEstancia * HORAS_TRABAJO_POR_DIA);
            const costoOperador = tiempoTotalLaboral * SALARIO_OPERADOR_HORA;
            
            const subtotal = costoCombustible + costoOperador;
            const total = subtotal * (1 + MARGEN_GANANCIA);
            
            setTotalEstimado(total);
        }
    }, [distancia, tiempoHoras, diasEstancia]);

    // Componente interno para manejar la ruta de Leaflet
    const RoutingControl = () => {
        const map = useMap();

        useEffect(() => {
            if (!map) return;

            const routingControl = L.Routing.control({
                waypoints: [null], // El usuario hace clic para poner puntos
                routeWhileDragging: true,
                language: 'es',
                createMarker: (i, waypoint) => {
                    return L.marker(waypoint.latLng, {
                        draggable: true,
                        icon: L.icon({
                            iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
                            shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
                            iconSize: [25, 41],
                            iconAnchor: [12, 41]
                        })
                    });
                }
            }).addTo(map);

            routingControl.on('routesfound', (e) => {
                const routes = e.routes;
                const summary = routes[0].summary;
                setDistancia(summary.totalDistance / 1000); // metros a km
                setTiempoHoras(summary.totalTime / 3600);   // segundos a horas
            });

            return () => map.removeControl(routingControl);
        }, [map]);

        return null;
    };

    return (
        <div className="calculator-wrapper">
            <h2 className="main-title">Estima tu Viaje</h2>
            
            <div className="layout-grid">
                <div className="map-container">
                    <MapContainer 
                        center={[23.6345, -102.5528]} 
                        zoom={5} 
                        style={{ height: '100%', width: '100%' }}
                    >
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution='&copy; OpenStreetMap contributors'
                        />
                        <RoutingControl />
                    </MapContainer>
                </div>

                <div className="controls-panel">
                    <div className="input-group">
                        <label>Días de estancia en destino:</label>
                        <input 
                            type="number" 
                            value={diasEstancia} 
                            onChange={(e) => setDiasEstancia(Number(e.target.value))}
                            min="1"
                        />
                    </div>

                    <div className="results-display">
                        <p><strong>Distancia (Ida):</strong> {distancia.toFixed(2)} km</p>
                        <p><strong>Tiempo conducción (Ida):</strong> {tiempoHoras.toFixed(2)} hrs</p>
                        <hr />
                        <h3>Total Estimado (Ida y Vuelta):</h3>
                        <p className="price-tag">
                            ${totalEstimado.toLocaleString('es-MX', { minimumFractionDigits: 2 })} MXN
                        </p>
                        <small>*Incluye combustible (Diesel), salario y 30% de utilidad.</small>
                    </div>
                </div>
            </div>
            <p className="instruction">Haz clic en el mapa para marcar el punto de inicio y el destino.</p>
        </div>
    );
};

export default Maps;
