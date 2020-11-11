import React from "react";
import "./style.css";

function Title(props) {
    return <div className="title"> <h1><strong>Fairly Odd Parents Clicky Game!</strong></h1>
    <h3>Click on a character but make sure you don't click on one twice!</h3>
    <h4><strong>Score: {props.score} | Top Score: {props.topScore}</strong></h4>
    </div>
}

export default Title;