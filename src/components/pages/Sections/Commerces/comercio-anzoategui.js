import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_Anzoategui() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Anzoategui</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">AUTO ACCESORIOS 1000 MILLAS, S.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> AV. BOLÍVAR DE PUERTO LA CRUZ.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/autoaccesoriosmilmillas/" target="_blank">@autoaccesoriosmilmillas</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1650.9426224954946!2d-64.6373819026403!3d10.211042422024212!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2d75bbaccc2803%3A0x723727f7f81bc4a!2sAUTO%20ACCESORIOS%201000%20MILLAS%2C%20S.A.!5e0!3m2!1sen!2sve!4v1708699094953!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Comercio_Anzoategui;