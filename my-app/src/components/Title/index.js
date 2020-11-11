import React from "react";
import "./style.css";

function Title(props) {
    return <div className="title"> <h1>Fairly Odd Parents Clicky Game! </h1>
    <h3>Click on a character but make sure you don't click on one twice!</h3>
    <h4>Score: {props.score} | Top Score: {props.topScore}</h4>
    </div>
}

export default Title;