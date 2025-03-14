import React from "react";
import '../pages/Contacts.css';
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faEnvelope, faMap } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";


function Contacts() {
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

    return (
        <>
            <div className="contactos">

                <div className="fila">
                    <figure className="snip1573">
                        <img className="imagen-contacto" src="./images/Contactos/whatsapp.webp" alt="sample89" />
                        <figcaption className="caption-contacto">
                            <a className="enlace-contacto" href="https://wa.link/byj1si" target="_blank" />
                            <FontAwesomeIcon className="iconos" icon={faWhatsapp} />
                        </figcaption>
                    </figure>

                    <figure className="snip1573">
                        <img className="imagen-contacto" src="./images/Contactos/llamada.webp" alt="sample94" />
                        <figcaption className="caption-contacto">
                            <a className="enlace-contacto" href="tel:+584246328415" target="_blank" />
                            <FontAwesomeIcon className="iconos" icon={faPhone} />
                        </figcaption>
                    </figure>
                </div>

                <div className="fila">
                    <figure className="snip1573">
                        <img className="imagen-contacto" src="./images/Contactos/correo-2.webp" alt="sample92" />
                        <figcaption className="caption-contacto">
                            <a className="enlace-contacto" href="mailto:info@cauchoslamundial.com" target="_blank" />
                            <FontAwesomeIcon className="iconos" icon={faEnvelope} />
                        </figcaption>
                    </figure>


                    <figure className="snip1573">
                        <img className="imagen-contacto" src="./images/Contactos/mapa.webp" alt="sample94" />
                        <figcaption className="caption-contacto">
                            <a className="enlace-contacto" href="https://www.google.com/maps/place/Cauchos+La+Mundial+C.A./@10.585714,-71.630291,16z/data=!4m6!3m5!1s0x8e899772bf5d1d1b:0x1c0c2ab5928ca2b!8m2!3d10.5857137!4d-71.6302907!16s%2Fg%2F11b5qrbd27?hl=en&entry=ttu" target="_blank" />
                            <FontAwesomeIcon className="iconos" icon={faMap} />
                        </figcaption>
                    </figure>
                </div>
            </div>

            <Footer />

        </>
    );
}

export default Contacts;