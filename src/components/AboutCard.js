import React from "react";
import Card from "./CardItem";
import "./AboutCard.css";
import resumeRuchiShah from "./resumeRuchiShah.pdf";

function AboutCard() {
    return (
        <div className="about-card" id="about">
            <h1>About Me</h1>
            <div className="about-card_container">
                <div className="about-card_wrapper">

                    <div class="flexbox">
                        <img class="align-self" src="/photos/hoco-photo.jpg" alt="Photo of me" />
                        <p>Hi, I'm Ruchi! I'm currently a senior at Stephen F. Austin High School, and I plan to major in computer science in college. I was born and
                        raised in the Houston Area, in an extremely diverse community. I'm so excited to be graduating soon, and I can't wait to discover so many amazing places and opportunities.
                            Feel free to check out my <a href={resumeRuchiShah} download="resumeRuchiShah.pdf">resume</a>.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutCard
