import React from "react";
import Card from "./CardItem";
import "./AboutCard.css";


function AboutCard() {
    return (
        <div className="about-card" id="about">
            <h1>About Me</h1>
            <div className="about-card_container">
                <div className="about-card_wrapper">
                    <ul className="about-card_item">
                        <Card
                            src="photos/lavender-background.jpg"
                            text="some info"
                        />
                        <Card
                            src="photos/lavender-background.jpg"
                            text="some info"
                        />
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default AboutCard
