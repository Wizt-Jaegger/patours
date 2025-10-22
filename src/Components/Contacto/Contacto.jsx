import React from "react";
import './Contacto.css';
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'

const Contacto = () =>{

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Enviando....");
        const formData = new FormData(event.target);

        formData.append("access_key", "8fa52b60-4c48-4ef8-91d4-098bc7c5bc4a");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Mensaje enviado con exito!");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

    return(
        <div className="contacto">
            <div className="contacto-col">
                <h3>Envianos un mensaje <img src={msg_icon} alt="" /></h3>
                <p>tomate la libertad de contactarnos por medio de este formulario de contacto, to feedback, preguntas y sugerencias son importantes para nosotros</p>
                <ul>
                    <li><img src={mail_icon} alt="" />palmare.72@gmail.com</li>
                    <li><img src={phone_icon} alt="" />+52 777-192-4531</li>
                    <li> <img src={location_icon} alt="" />Calle Benito Juarez s/n Esq. Villa de Tezoyuca, Emiliano Zapata <br /> Codigo postal 62100, Morelos, Mexico</li>
                </ul>
            </div>
            <div className="contacto-col">
                <form onSubmit={onSubmit}>
                    <label>
                        Nombre: 
                    </label>
                    <input type="text" name="nombre" placeholder="Ingresa tu nombre" required/>
                    <label>
                        Telefono: 
                    </label>
                    <input type="tel" name="telefono" placeholder="Ingresa tu numero de telefono" required/>
                    <label>
                        Escribe tu mensaje: 
                    </label>
                    <textarea name="mensaje" rows="6" placeholder="Ingresa tu mensaje aqui" required></textarea>
                    <button type="submit" className="btn">Enviar ahora!</button>
                    <span>
                        {result}
                    </span>
                    
                </form>
            </div>
        </div>
    )
}
export default Contacto