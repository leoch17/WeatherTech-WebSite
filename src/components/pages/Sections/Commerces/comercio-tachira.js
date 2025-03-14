import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_Tachira() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Táchira</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">CENTER CAUCHOS PUEBLO NUEVO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/centercauchossc/" target="_blank">@centercauchossc</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d988.2650585397745!2d-72.22028750930306!3d7.783438696464741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e666c8e67828dd3%3A0x317508ff296fe5e1!2sCenter%20Cauchos%20Pueblo%20Nuevo%20Ca!5e0!3m2!1ses!2sve!4v1708636573728!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Comercio_Tachira;