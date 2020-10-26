import React from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

function CardItemV(props) {
    return (
        <>
            <li className="cards__item">
                <Link className="cards__item__link" to={props.path}>
                    <figure className="cards__item__pic-wrap">
                        <ReactPlayer
                            className="cards__item__img"
                            url="https://www.youtube.com/watch?v=3qO4AezTMwg"
                        />
                    </figure>
                    <div className="cards__item__info">
                        <h5 className="cards__item__text">{props.text}</h5>
                    </div>
                </Link>
            </li>
        </>
    );
}

export default CardItemV;