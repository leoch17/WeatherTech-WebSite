import React from "react";
import "../Category.css";
import Accordion from "react-bootstrap/Accordion";
import Footer from "../../../Footer";

function Universales_ford() {

    return (
        <>
        <body className='pestañas'>
            <center>
                <div className='acordion-floorliner'>
                    <Accordion className="floorliner-principal" >
                        <Accordion.Item eventKey="2">
                            <Accordion.Header className="floorliner-header">Ford 250</Accordion.Header>
                            <Accordion.Body>
                                <div className="image-responsive">
                                    <img className="image-producto" src="./images/Productos/Floorliner/Ford250.png" />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </center>
        </body>
        <Footer/>
        </>
    );
}

export default Universales_ford;