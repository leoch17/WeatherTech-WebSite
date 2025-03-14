import React from "react";
import { Link } from "react-router-dom";
import "./Subcategorie_universales.css";
import Footer from "../../../Footer";

function Subcategorie_universales() {
    /* Demo purposes only */
    var snippet = [].slice.call(document.querySelectorAll('.hover'));
    if (snippet.length) {
        snippet.forEach(function (snippet) {
            snippet.addEventListener('mouseout', function (event) {
                if (event.target.parentNode.tagName === 'figure') {
                    event.target.parentNode.classList.remove('hover')
                } else {
                    event.target.parentNode.classList.remove('hover')
                }
            });
        });
    }


    return (
        <>

            <div className="sub-universales">

                <figure class="snip1500-universales">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/chevrolet.jpg" />
                    <figcaption className="card-universales">
                        <div className="content-universales">
                            <Link to="/universales-chevrolet" className="enlace-universales">
                                <h2 className="title-universales">Ver</h2>
                                <h2 className="title-universales">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

                <figure class="snip1500-universales">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/ford.jpg" />
                    <figcaption className="card-universales">
                        <div className="content-universales">
                            <Link to="/universales-ford" className="enlace-universales">
                                <h2 className="title-universales">Ver</h2>
                                <h2 className="title-universales">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

                <figure class="snip1500-universales">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/toyota.jpg" />
                    <figcaption className="card-universales">
                        <div className="content-universales">
                            <Link to="/universales-toyota" className="enlace-universales">
                                <h2 className="title-universales">Ver</h2>
                                <h2 className="title-universales">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

            </div >

            <Footer />
        </>
    );
}

export default Subcategorie_universales;