import React from "react";
import '../components/Footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook, faYoutube } from "@fortawesome/free-brands-svg-icons";
import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {

    return (
        <>
            <div className="footer-container">
                <center>
                    <div className="footer-horario">
                        <div className="work-hour">
                            <br />
                            <h4>Horario de Atención:</h4>
                            <p className="schedule">Lunes - Viernes, 8:00 a.m. - 6:00 p.m.</p>
                        </div>
                    </div>
                </center>

                <div className="container">
                    <div className="row">
                        <div className="col-sm-4"></div>
                        <div className="col-sm-4">
                            <div className="social-icons">
                                <a
                                    target="_blank"
                                    href="https://www.instagram.com/weathertech.ve/"
                                    aria-label="Instagram">
                                    <FontAwesomeIcon className="social-icons" icon={faInstagram} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.facebook.com/profile.php?id=100065143945900"
                                    aria-label="Facebook">
                                    <FontAwesomeIcon className="social-icons" icon={faFacebook} />
                                </a>
                                <a
                                    target="_blank"
                                    href="https://www.youtube.com/channel/UCTu-ytEHtR_0eKmOhAyWiyg"
                                    aria-label="Youtube">
                                    <FontAwesomeIcon className="social-icons" icon={faYoutube} />
                                </a>
                            </div>
                        </div>
                        <div className="col-sm-4"></div>
                    </div>
                </div>
                <br />

                <center>
                    <div className="footer-horario">
                        <a href="/" className="social-logo">
                            <img className="social-logo" src="images/logo-weathertech.png" />
                        </a>
                        &#160;
                        &#160;
                        &#160;
                        &#160;
                        <a className="social-logo" href="https://www.cauchoslamundial.com.ve/#/" target="_blank">
                            <img className="social-logo" src="images/clm-blanco.png" />
                        </a>
                    </div>
                </center>
                <br />

                <div>
                    <center>
                        <div className="container">
                            <small className="website-rights">
                                ©{" "}
                                <a className="marca-ven" href="/">
                                    WEATHERTECH Venezuela
                                </a>
                                . Todos los derechos reservados. Diseñado por Grupo La Mundial C.A.
                            </small>
                        </div>
                    </center>
                    <br />
                </div>
            </div>
        </>
    );
}

export default Footer;