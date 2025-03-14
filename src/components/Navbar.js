import React, { useState, useEffect } from "react";
import '../components/Navbar.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    const toggleLinkTarget = (event) => {
        event.preventDefault();
        const link = event.target;
        const currentTarget = link.getAttribute("target");
        const newTarget = currentTarget === "_self" ? "_blank" : "_self";
        link.setAttribute("target", newTarget);
        window.open(link.href, newTarget);
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener("resize", showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" onClick={closeMobileMenu}>
                        <img className="navbar-logo" src="images/logo-weathertech.png" />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <FontAwesomeIcon icon={faBars} style={{ color: "black" }} />
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    <ul className={click ? "nav-menu active" : "nav-menu"} >
                        <li className="nav-item">
                            <Link
                                to="/"
                                className="nav-links"
                                target="_self"
                                onClick={closeMobileMenu}>
                                Inicio
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/products"
                                className="nav-links"
                                target="_self"
                                onClick={closeMobileMenu}>
                                Productos
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                to="/aboutus"
                                className="nav-links"
                                target="_self"
                                onClick={closeMobileMenu}>
                                Nosotros
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link
                                to="/news"
                                className="nav-links"
                                target="_self"
                                onClick={closeMobileMenu}>
                                Noticias
                            </Link>
                        </li> */}
                        <li className="nav-item">
                            <Link
                                to="/contacts"
                                className="nav-links"
                                target="_self"
                                onClick={closeMobileMenu}>
                                Contactos
                            </Link>
                        </li>
                    </ul>
                    <a href="https://www.cauchoslamundial.com.ve/#/" target="_blank">
                        <img className="navbar-logo-second" src="images/clm.png" />
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Navbar;