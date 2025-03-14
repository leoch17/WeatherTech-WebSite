import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_Portuguesa() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Portuguesa</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">INVERSIONES VALSOF, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. SIMÓN BOLÍVAR CON AV. PRINCIPAL DE LA IMPORTANCIA, A DOS LOCALES DE POLLOS EL RUEDO, GUANARE 3350.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/valsoftiresca/" target="_blank">@valsoftiresca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584245906364" target="_blank"> +58 424-5906364</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.2925695818335!2d-69.73605069999999!3d9.0370539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7cf54353789d81%3A0xd5ddb5c3296c0b14!2sVALSOF%20TIRES!5e0!3m2!1sen!2sve!4v1708636960680!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">AGRI MAKRO RUEDAS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. 9B CON CALLE 67 CECILIO ACOSTA.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/agrimakroruedas/" target="_blank">@agrimakroruedas</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN<br />
                                        <br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">CENTRO DE SERVICIOS RMS, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/ruedaslamundial/?hl=en" target="_blank">@ruedaslamundial</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN<br />
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1654.3248207700897!2d-69.23019309068226!3d9.537398662807389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zOcKwMzInMTQuNCJOIDY5wrAxMyc0Ny4zIlc!5e0!3m2!1ses!2sve!4v1708637407398!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>
                        </div>
                    </center>
                </div>
            </body>
            <Footer />
        </>
    )
}

export default Comercio_Portuguesa;