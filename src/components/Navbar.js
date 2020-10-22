import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import resumeRuchiShah from "./resumeRuchiShah.pdf";
import "./Navbar.css";
import "./testDoc.pdf";

function Navbar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);






    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        Ruchi Shah
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"} />
                    </div>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="hero" className="nav-links"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMobileMenu}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="about" className="nav-links"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMobileMenu}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="interests" className="nav-links"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMobileMenu}>Interests</Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                activeClass="active"
                                to="projects" className="nav-links"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={closeMobileMenu}>Projects</Link>
                        </li>
                        <li className="nav-item">
                            <a href={resumeRuchiShah} download="resumeRuchiShah.pdf" className="nav-links">
                                Resume⭳ </a>
                        </li>

                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
