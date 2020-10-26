import React from "react";
import { Link } from "react-router-dom";
import "./Cards.css";
import CardItem from "./CardItem";
import CardItemV from "./CardItemV";

function Cards() {
    return (
        <div className="cards" id="interests">
            <h1>My Interests and Experiences</h1>
            <div className="cards__container" >
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                            src="photos/dance-pic.jpg"
                            text="Kathak: I began Kathak, a classical Indian dance form, when I was six-years-old. 
                            I quickly fell in love, longing for weekends to see my friends and guru in class. 
                            It became my happy place. A huge aspect of Kathak is self composition and improv. Learning to think quickly on my feet
                            has made me a better thinker along with a better artist. Through this, I was able to better express myself and become more confident.
                            I cannot imagine my life without Kathak."
                        />
                        <CardItemV
                            src="photos/singing-v.mov"
                            text="Music: From playing the violin in orchestra to singing in choir to just sharing music with my friends, music has been essential in 
                            allowing me to express myself and create connections with others. Almost anytime I meet someone new, I ask them about their favorite artist or genre. 
                            I truly do love any genre of music (except maybe metal) because they all create meaning in different ways. My favorite genres to sing have to be musical theatre or any operatic piece like an aria."
                        />
                    </ul>
                    <div>
                        <h2>NASA Summer Internship</h2>
                    </div>
                    <ul className="cards__items">
                        <CardItem
                            src="photos/stuffed-suits.jpg"
                            text="Space Exploration: Astronomy, to me, is one of the most interesting fields of science. It's so insane to think we are just little specks in this universe. In the summer of 2019, 
                            I had the amazing opportunitiy to intern at NASA Jihnson Space Center. At the same time, it was the 50th anniversary of the Apollo 11 moon landing, so I was learning so much about space exploartion,
                            and future Artemis missions to the moon. It is actually insane how much us tiny specks have been able to accomplish, and the future for space exploration is so exciting. "
                        />
                        <CardItem
                            src="photos/nbl.jpg"
                            text="The Neutral Buoyancy Lab was one of my favorite facilities to visit. Evertime I went I had to hold in the urge to just jump into the pool. I was extremely jealous of the
                            astronauts who trained there, until I actually saw how intense their training was."
                        />
                    </ul>

                    <ul className="cards__items">
                        <CardItem
                            src="photos/sunita-williams-photo.jpg"
                            text="I had the chance to meet many astronauts, but I was most inspired by Sunita Williams' journey. "
                        />
                        <CardItem
                            src="photos/fake-training-time.jpg"
                            text="On one of my many trips to the Space Vehicle Mockup Facility, I got to go through old shuttle
                            mockups to learn more about how they worked. "
                        />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
