import React from "react";
import "../Category.css";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../../Footer";

function Cargotech_toyota() {

    return (
        <>
        <body className="pestañas">
                <center>
                    <div className="acordion-floorliner">
                        <Accordion className="floorliner-principal" >

                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="floorliner-header" >Toyota Corolla</Accordion.Header>
                                <Accordion.Body>
                                    <div className="image-responsive">
                                        <img className="image-producto" src="./images/Productos/Floorliner/Silverado4puertas.png" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                             <Accordion.Item eventKey="1">
                                <Accordion.Header className="floorliner-header">Toyota Camry</Accordion.Header>
                                <Accordion.Body>
                                    <div className="image-responsive">
                                        <img className="image-producto" src="./images/Productos/Floorliner/ChevroletCruz.png" />
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </center>
            </body>
            <Footer />
        </>
    );
}

export default Cargotech_toyota;