import React from "react";
import { Link } from "react-router-dom";
import "../Subcategories/Subcategorie_cargoliner.css";
import Footer from "../../../Footer";

function Subcategorie_cargoliner() {

    return (
        <>
            <div className="sub-cargoliner">

                <figure class="snip1500-cargoliner">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/hyundai.jpg" />
                    <figcaption className="card-cargoliner">
                        <div className="content-cargoliner">
                            <Link to="/cargoliner-hyundai" className="enlace-cargoliner">
                                <h2 className="title-cargoliner">Ver</h2>
                                <h2 className="title-cargoliner">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

                <figure class="snip1500-cargoliner">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/toyota.jpg" />
                    <figcaption className="card-cargoliner">
                        <div className="content-cargoliner">
                            <Link to="/cargoliner-toyota" className="enlace-cargoliner">
                                <h2 className="title-cargoliner">Ver</h2>
                                <h2 className="title-cargoliner">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

            </div >

            <Footer />
        </>
    );
}

export default Subcategorie_cargoliner;