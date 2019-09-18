import React from "react";

import Card from "./Card/Card";
import classes from "./Board.module.css";

const board = props => {
  const cards = Array(...props.cards);
  const cardsDouble = cards.map(el => el);
  const pairs = cards.concat(cardsDouble);

  pairs.sort((el1, el2) => Math.random() - Math.random()); //RANDOMIZING THE ARRAY ELEMENTS

  const transformedPairs = pairs.map((el, index) => {
    return (
      <Card key={index} type={el} click={() => props.cardClick(el, index)} />
    );
  });

  return <div className={classes.Board}>{transformedPairs}</div>;
};

export default board;
