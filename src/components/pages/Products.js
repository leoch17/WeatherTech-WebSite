import React from "react";
import { Link } from "react-router-dom";
import '../pages/Products.css';
import $ from "jquery";
import Footer from "../Footer";

function Products() {
    $(".hover").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );


    return (
        <>
            <div className="productos">

                <figure className="snip1477">
                    <img className="imagen-producto" src="./images/Productos/FLOORLINER.jpg" alt="sample38" />
                    <div className="title">
                        <div>
                            <h2 className="subtitle">Floorliner</h2>
                            <Link className="enlace-producto" to="/Subcategorie_floorliner">ver más</Link>
                        </div>
                    </div>
                    <figcaption>
                        <p className="contenido-producto">Creadas para cada espacio en el interior de tu vehículo.</p>
                    </figcaption>
                </figure>

                <figure className="snip1477">
                    <img className="imagen-producto" src="./images/Productos/CARGOLINER.jpg" alt="sample91" />
                    <div className="title">
                        <div>
                            <h2 className="subtitle">Cargoliner</h2>
                            <Link className="enlace-producto" to="/subcategorie_cargoliner">ver más</Link>
                        </div>
                    </div>
                    <figcaption>
                        <p className="contenido-producto">Ajustadas para la parte trasera de cada SUV o camioneta.</p>
                    </figcaption>
                </figure>

                <figure className="snip1477">
                    <img className="imagen-producto" src="./images/Productos/CARGOTECH.jpg" alt="sample91" />
                    <div className="title">
                        <div>
                            <h2 className="subtitle">Cargotech</h2>
                            <Link className="enlace-producto" to="/subcategorie_cargotech">ver más</Link>
                        </div>
                    </div>
                    <figcaption>
                        <p className="contenido-producto">La solución perfecta a los traslados de cosas frágiles en tu camioneta.</p>
                    </figcaption>
                </figure>

                <figure className="snip1477">
                    <img className="imagen-producto" src="./images/Productos/UNIVERSALES.jpg" alt="sample35" />
                    <div className="title">
                        <div>
                            <h2 className="subtitle">Tri-To-Fit (Universales)</h2>
                            <Link className="enlace-producto-universales" to="/subcategorie_universales">ver más</Link>
                        </div>
                    </div>
                    <figcaption>
                        <p className="contenido-producto">Protección para cada vehículo ajustable a cada modelo. </p>
                    </figcaption>
                </figure>

            </div>

            <Footer />
        </>
    );
}

export default Products;