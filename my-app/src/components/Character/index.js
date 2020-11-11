import React from "react";
import "./style.css";

const CharacterCard = props => (
    <div className="card col-md-3" onClick={() => props.clickedImage(props.id)}>
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>
)


export default CharacterCard;
