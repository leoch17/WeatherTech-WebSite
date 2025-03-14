import React from "react";
import { Link } from "react-router-dom";
import "../Subcategories/Subcategorie_cargotech.css";
import Footer from "../../../Footer";

function Subcategorie_cargotech() {

    return (
        <>
            <div className="sub-cargotech">
            
                            <figure class="snip1500-cargotech">
                                <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/chevrolet.jpg" />
                                <figcaption className="card-cargotech">
                                    <div className="content-cargotech">
                                        <Link to="/cargotech-chevrolet" className="enlace-cargotech">
                                            <h2 className="title-cargotech">Ver</h2>
                                            <h2 className="title-cargotech">Productos</h2>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
            
                            <figure class="snip1500-cargotech">
                                <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/hyundai.jpg" />
                                <figcaption className="card-cargotech">
                                    <div className="content-cargotech">
                                        <Link to="/cargotech-hyundai" className="enlace-cargotech">
                                            <h2 className="title-cargotech">Ver</h2>
                                            <h2 className="title-cargotech">Productos</h2>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
            
                            <figure class="snip1500-cargotech">
                                <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/mitsubishi.jpg" />
                                <figcaption className="card-cargotech">
                                    <div className="content-cargotech">
                                        <Link to="/cargotech-mitsubishi" className="enlace-cargotech">
                                            <h2 className="title-cargotech">Ver</h2>
                                            <h2 className="title-cargotech">Productos</h2>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
            
                            <figure class="snip1500-cargotech">
                                <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/toyota.jpg" />
                                <figcaption className="card-cargotech">
                                    <div className="content-cargotech">
                                        <Link to="/cargotech-toyota" className="enlace-cargotech">
                                            <h2 className="title-cargotech">Ver</h2>
                                            <h2 className="title-cargotech">Productos</h2>
                                        </Link>
                                    </div>
                                </figcaption>
                            </figure>
            
                        </div >

            <Footer />
        </>
    );
}

export default Subcategorie_cargotech;