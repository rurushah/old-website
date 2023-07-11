import React from "react";
import Card from "./CardItem";
import "./AboutCard.css";
import resumeRuchiShah from "./resume_ruchishah.pdf";

function AboutCard() {
    return (
        <div className="about-card" id="about">
            <h1>About Me</h1>
            <div className="about-card_container">
                <div className="about-card_wrapper">

                    <div class="flexbox">
                        <img class="align-self" src="/photos/hoco-photo.jpg" alt="Photo of me" />
                        <p>Hi, I'm Ruchi! I'm currently a sophomore at UT Austin majoring in CS and Math.
                            Feel free to check out my <a href={resumeRuchiShah} download="/public/files/resume_ruchishah.pdf">resume</a>.
                        </p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutCard
