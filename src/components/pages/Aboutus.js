import React from "react";
import '../pages/Aboutus.css';
import $ from "jquery";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Footer";


function Aboutus() {
    $(document).ready(function () {
        // Show or hide the sticky footer button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 200) {
                $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
            }
        });

        // Animate the scroll to top
        $('.go-top').click(function (event) {
            event.preventDefault();

            $('html, body').animate({ scrollTop: 0 }, 300);
        })
    });

    return (
        <>
            <a href="#" class="go-top"><FontAwesomeIcon className="boton-subir" icon={faAngleUp} /></a>

            <main className="principal">

                <section className="section-background parallax">
                </section>

                <section>
                    <section className="section-background parallax1">
                    </section>

                    <section>
                        <section className="section-background parallax2">
                        </section>

                        <section className="section-background parallax3">
                        </section>

                        <section className="section-background parallax4">
                        </section>

                        <section className="section-background parallax5">
                        </section>

                        <section className="section-background parallax6">
                        </section>

                        <section className="section-background parallax7">
                        </section>
                    </section>
                </section>

            </main>

            <Footer />
        </>
    );
}

export default Aboutus;