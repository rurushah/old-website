import React from "react";
import "./Footer.css";

function Footer() {
    return (
        <div className="footer-container">
            <section className="footer-stuff">
                <p className="footer-heading">
                    This website is still under development. Email me if you have any feedback!
        </p>
            </section>
            <div class="footer-links">
                <div className="footer-link-wrapper">
                    <div class="footer-link-items">
                        <a target="_blank" href="https://www.linkedin.com/in/ruchi-s-0a9a39189">LinkedIn</a>
                        <p>__ </p>
                        <a target="_blank" href="https://github.com/rurushah">GitHub</a>
                        <p>__</p>
                        <a target="_blank" href="mailto: shahruchi115@gmail.com">Email</a>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Footer;