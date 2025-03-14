import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_Trujillo() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Trujillo</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">AUTO EXTREMO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE RIO DE JANEIRO. ENTRE AV. 6 Y BOLÍVAR. EDIF: DON RAMON, LOCAL L-4, VALERA 3101.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/autoextremoca/" target="_blank">@autoextremoca</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN
                                        <br /><br />
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">SERVICAUCHOS ANA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> CALLE 5 AV. 11 Y 12 C.C. ELENA PB PLANTA BAJA LOCAL 1, VALERA ESTADO TRUJILLO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/importcana/" target="_blank">@importcana</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN<br />
                                        <br /><br />
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

export default Comercio_Trujillo;