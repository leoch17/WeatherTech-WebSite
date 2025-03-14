import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_Lara() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Lara</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">LA CAUCHERA 251, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/lacauchera251/" target="_blank">@lacauchera251</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584125592689" target="_blank">+58 412-5592689</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1167.8932877882423!2d-69.29055001879195!3d10.073737973772174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDA0JzI2LjAiTiA2OcKwMTcnMjQuMSJX!5e0!3m2!1ses!2sve!4v1708693082399!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">RESERCAUCHOS CHURUN, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faLocationArrow} /> C.C. CHURUN, MERÚ - BARQUISIMETO.<br></br>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/resercauchos/" target="_blank">@resercauchos</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584245438998" target="_blank">+58 424-5438998</a>
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

export default Comercio_Lara;