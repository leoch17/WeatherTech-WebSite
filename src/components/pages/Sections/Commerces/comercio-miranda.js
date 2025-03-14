import React from "react";
import "./css commerces/comercio.css";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faPhone, faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Footer from "../../../Footer";

function Comercio_Miranda() {
    return (
        <>
            <body class="comerce" >
                <div >
                    <center>
                        <div class="acordion-comercio">
                            <br></br>
                            <h2 className="zone-title">Redes de Distribución de Miranda</h2>

                            <Accordion style={{ width: '55%' }}>

                                <Accordion.Item eventKey="0">
                                    <Accordion.Header class="acordion-header">MULTISERVICIOS NATFRAN 2012, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/cambiatuneumaticoya/" target="_blank">@cambiatuneumaticoya</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584123120357" target="_blank"> +58 412-3120357</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.93893281265!2d-66.8271541!3d10.426420799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2af7cd703e575f%3A0x36880daf9e8171de!2scambiatuneumaticoya!5e0!3m2!1sen!2sve!4v1708638775998!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="1">
                                    <Accordion.Header class="acordion-header">INVERSIONES FORACAR 2010, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> SIN INFORMACIÓN <br />
                                        <FontAwesomeIcon icon={faPhone} /> SIN INFORMACIÓN<br />
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d980.7948217561067!2d-66.87001580489348!3d10.486528688565594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDI5JzEyLjMiTiA2NsKwNTInMTIuNCJX!5e0!3m2!1sen!2sve!4v1708638902855!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="2">
                                    <Accordion.Header class="acordion-header">CAUCHOS LINA 2011, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/cauchoslina2011/" target="_blank">@cauchoslina2011</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584124093051" target="_blank"> +58 412-4093051</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1961.5599841713383!2d-66.82222188650816!3d10.491208016275065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a59ce65d2129f%3A0x710f3b51c0818e9d!2sCauchos%20Lina%202011%2C%20CA!5e0!3m2!1sen!2sve!4v1708639068482!5m2!1sen!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
                                    </Accordion.Body>
                                </Accordion.Item>

                                <Accordion.Item eventKey="3">
                                    <Accordion.Header class="acordion-header">MULTIAUTOS CORRALITO, C.A.</Accordion.Header>
                                    <Accordion.Body>
                                        <FontAwesomeIcon icon={faInstagram} /> <a className="contacts" href="https://www.instagram.com/servicauchoslc/" target="_blank">@servicauchoslc</a> <br />
                                        <FontAwesomeIcon icon={faPhone} /> <a className="contacts" href="tel:+584121145423" target="_blank"> +58 412-1145423</a>
                                        <br /><br />
                                        <div class="ubic">
                                            <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1387.6488650384902!2d-67.00697898526857!3d10.352782556958418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTDCsDIxJzEwLjEiTiA2N8KwMDAnMjMuNyJX!5e0!3m2!1ses!2sve!4v1708639172313!5m2!1ses!2sve" width="400" height="300" style={{ border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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

export default Comercio_Miranda;