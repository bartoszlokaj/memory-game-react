import React from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import classes from "./Card.module.css";

const card = (props) => {
  return (
    <div className={classes.Card} id={props.id} onClick={props.click}>
      <CardFront />
      <CardBack />
    </div>
  );
};

export default card;
