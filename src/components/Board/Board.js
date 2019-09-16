import React from "react";

import Grid from "./Grid/Grid";
import Card from "./Card/Card";
import ScorePanel from "../UI/ScorePanel/ScorePanel";
import classes from "./Board.module.css";

const board = props => {
  const cards = Array(...props.cards);
  const cardsDouble = cards.map(el => el);
  const pairs = cards.concat(cardsDouble);

  const grid = props.grid;
  const gridDouble = grid.map(el => el);
  const gridFinalLength = grid.concat(gridDouble);
  console.log(gridFinalLength);

  pairs.sort((el1, el2) => Math.random() - Math.random());  //RANDOMIZING THE ARRAY ELEMENTS
  

  const transformedGrid = pairs.map((el, index) => {
    return (
      <Grid key={index} >
        <Card click={() => props.cardClick(el, index)} type={el}/>
      </Grid>
    );
  });

  const transformedPairs = pairs.map((el, index) => {
    return (
      <Grid key={index} type={el} click={() => props.cardClick(el, index)} />
    );
  });

  return (
    <div className={classes.Board}>
      {/* <Aux>{transformedPairs}</Aux> */}
      {/* {transformedPairs} */}
      {transformedGrid}
      <ScorePanel />
    </div>
  );
};

export default board;
