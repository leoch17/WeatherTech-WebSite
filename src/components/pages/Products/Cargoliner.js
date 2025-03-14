import React from "react";
import "../Products/Category.css";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../Footer";

function Cargoliner() {

    return (
        <>
            <body className="pestañas">
                <center>
                    <div className="acordion-floorliner">
                        <Accordion className="floorliner-principal" style={{ width: '55%' }}>

                            <Accordion.Item eventKey="0">
                                <Accordion.Header className="floorliner-header"><img className="image-acordion" src="./images/logo-weathertech.png" /></Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header className="floorliner-header"><img className="image-acordion" src="./images/clm.png" /></Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header className="floorliner-header">Cargotech</Accordion.Header>
                                <Accordion.Body>

                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header className="floorliner-header">Universales</Accordion.Header>
                                <Accordion.Body>

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

export default Cargoliner;