import React from "react";

import classes from "./Card.module.css";

const cardBack = props => {
  return (
    <div
      className={[classes.CardSide, classes.CardBack].join(" ")}
      style={{
        transform: props.rotatedFront ? "rotateY(-180deg)" : "rotateY(0deg)"
      }}></div>
  );
};

export default cardBack;
