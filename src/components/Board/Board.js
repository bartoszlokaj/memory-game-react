import React from "react";

import Card from "./Card/Card";
import classes from "./Board.module.css";

const board = props => {
  const cards = [...props.cards];

  const transformedCards = cards.map((el, index) => {
    return (
      <Card
        key={'c' + index}
        id={'c' + index}
        type={el}
        click={() => props.cardClick(el, index)}
      />
    );
  });

  return <div className={classes.Board}>{transformedCards}</div>;
};

export default board;
