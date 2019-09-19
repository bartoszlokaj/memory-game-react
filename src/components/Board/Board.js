import React from "react";

import Card from "../../containers/Card/Card";
import classes from "./Board.module.css";

const board = props => {
  console.log(props.cards)
  const cards = [...props.cards];

  const transformedCards = cards.map((el, index) => {
    return (
      <Card
        key={index}
        type={el}
        click={() => props.cardClick(el, index)}
      />
    );
  });

  return <div className={classes.Board}>{transformedCards}</div>;
};

export default board;
