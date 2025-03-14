import React from "react";
import { Link } from "react-router-dom";
import "./Subcategorie_floorliner.css";
import Footer from "../../../Footer";

function Subcategorie_floorliner() {
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

            <div className="sub-floorliner">

                <figure class="snip1500-floorliner">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/chevrolet.jpg" />
                    <figcaption className="card-floorliner">
                        <div className="content-floorliner">
                            <Link to="/floorliner-chevrolet" className="enlace-floorliner">
                                <h2 className="title-floorliner">Ver</h2>
                                <h2 className="title-floorliner">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

                <figure class="snip1500-floorliner">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/ford.jpg" />
                    <figcaption className="card-floorliner">
                        <div className="content-floorliner">
                            <Link to="/floorliner-ford" className="enlace-floorliner">
                                <h2 className="title-floorliner">Ver</h2>
                                <h2 className="title-floorliner">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

                <figure class="snip1500-floorliner">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/hyundai.jpg" />
                    <figcaption className="card-floorliner">
                        <div className="content-floorliner">
                            <Link to="/floorliner-hyundai" className="enlace-floorliner">
                                <h2 className="title-floorliner">Ver</h2>
                                <h2 className="title-floorliner">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

                <figure class="snip1500-floorliner">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/mitsubishi.jpg" />
                    <figcaption className="card-floorliner">
                        <div className="content-floorliner">
                            <Link to="/floorliner-mitsubishi" className="enlace-floorliner">
                                <h2 className="title-floorliner">Ver</h2>
                                <h2 className="title-floorliner">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>

                <figure class="snip1500-floorliner">
                    <img className="image-flooliner" style={{ width: "100%", height: "100%" }} src="./images/Productos/sub-categorias/toyota.jpg" />
                    <figcaption className="card-floorliner">
                        <div className="content-floorliner">
                            <Link to="/floorliner-toyota" className="enlace-floorliner">
                                <h2 className="title-floorliner">Ver</h2>
                                <h2 className="title-floorliner">Productos</h2>
                            </Link>
                        </div>
                    </figcaption>
                </figure>
            </div >

            <Footer />
        </>
    );
}

export default Subcategorie_floorliner;