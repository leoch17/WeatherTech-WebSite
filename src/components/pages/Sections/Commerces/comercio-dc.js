import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_DC() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Distrito Capital</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">RUSTICPARTS 4X4, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/caracas4x4/" target="_blank">@caracas4x4</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584141265101" target="_blank"> +58 414-1265101</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1649.8942733937356!2d-66.95805019918063!3d10.41108801596397!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI0JzM5LjIiTiA2NsKwNTcnMjguNCJX!5e0!3m2!1sen!2sve!4v1708697885209!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">INVERSIONES LA GRAN CHISPA DEL CAUCHO C.M., C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/chispacauchoscombateria/" target="_blank">@chispacauchoscombateria</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584125818549" target="_blank"> +58 412-5818549</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1166.4103913356737!2d-66.96526599602312!3d10.475320255429168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI4JzMwLjAiTiA2NsKwNTcnNTMuMCJX!5e0!3m2!1ses!2sve!4v1708698006300!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">CAUCHOS Y ACCESORIOS LA CAMPIÑA, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/cauchoslacampina/" target="_blank">@cauchoslacampina</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584143012740" target="_blank"> +58 414-3012740</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d980.761517192055!2d-66.87007554114778!3d10.497034665811146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzQ4LjQiTiA2NsKwNTInMTEuNiJX!5e0!3m2!1ses!2sve!4v1708698270903!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Comercio_DC;