import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
    return (
        <div className="cards" id="interests">
            <h1>My Interests</h1>
            <div className="cards__container" >
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="photos/lavender-background.jpg"
                            text="Kathak: I began Kathak, a classical Indian dance form when I was six-years-old. 
                            I quickly fell in love, longing for weekends to see my friends and guru in class. 
                            It became my happy place. A huge aspect of Kathak is self composition and improv. Learning to think quickly on my feet
                            has made me a better thinker along with a better artist. Through this, I was able to better express myself and become more confident.
                            I cannot imagine my life without Kathak."
                        />
                        <CardItem
                            src="photos/lavender-background.jpg"
                            text="Music"
                        />
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                            src="photos/lavender-background.jpg"
                            text="NASA"
                        />
                        <CardItem
                            src="photos/lavender-background.jpg"
                            text="Minecraft"
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
