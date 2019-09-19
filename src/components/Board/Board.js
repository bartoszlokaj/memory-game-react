import React from "react";

import Card from "./Card/Card";
import classes from "./Board.module.css";

const board = props => {
  const cards = Array(...props.cards);
  const cardsDouble = cards.map(el => el);
  const pairs = cards.concat(cardsDouble);
  let newPairs = null;

  // (function randomizing() {
  //   console.log("dupa");
  //   newPairs = pairs.sort((el1, el2) => Math.random() - Math.random()); //RANDOMIZING THE ARRAY ELEMENTS
  //   return newPairs;
  // })();

  if(props.shuffle === true || props.gameStart === true){
    const randomizing = () => {
        newPairs = pairs.sort((el1, el2) => Math.random() - Math.random()); //RANDOMIZING THE ARRAY ELEMENTS
        return newPairs;
    };
    randomizing();
  }

  console.log(newPairs);

  // if(props.shuffle === true || props.gameStart === true) {
  //   randomizing(pairs);
  // }

  const transformedPairs = newPairs.map((el, index) => {
    return (
      <Card
        key={index}
        type={el}
        click={() => props.cardClick(el, index)}
        isPair={props.isPair}
      />
    );
  });

  return <div className={classes.Board}>{transformedPairs}</div>;
};

export default board;
