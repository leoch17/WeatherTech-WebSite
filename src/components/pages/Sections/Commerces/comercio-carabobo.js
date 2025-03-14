import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_Carabobo() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Carabobo</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">HM LLANTAS VALENCIA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> ZONA INDUSTRIAL LOS GUAYOS SECTOR CARACARITOS COMPLEJO INDUSTRIAL LOS ROQUES, GUAYOS.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/hmllantasvalencia/" target="_blank">@hmllantasvalencia</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584124102571" target="_blank">+58 412-4102571</a>
                                        <br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">JGR AUTODIST, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/jgrautodist/" target="_blank">@jgrautodist</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5553.44416867125!2d-67.95217921047201!3d10.190559333094148!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e805d8d893a8065%3A0xe3db126c65aa3649!2sJGR%20Auto%20Dist!5e0!3m2!1sen!2sve!4v1708694451087!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Comercio_Carabobo;