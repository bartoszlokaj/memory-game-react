import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from "../../components/Board/Board";
import ScorePanel from "../../components/UI/ScorePanel/ScorePanel";
import classes from "./Game.module.css";

let PAIR = [];
let KEYS = [];
let CARDS = ["html", "css", "angular", "vue", "react", "js", "ruby"];
let CARDS_COPY = ["html", "css", "angular", "vue", "react", "js", "ruby"];

let SCORE = 0;

class Game extends Component {
  state = {
    grid: CARDS_COPY,
    cards: CARDS,
    score: SCORE
  };

  compareCards = type => {
    return type !== PAIR[0];
  };

  cardClickHandler = (type, key) => {
    KEYS.push(key);
    PAIR.push(type);

    if (PAIR[0] === PAIR[1] && KEYS[0] !== KEYS[1]) {
      let cardsFiltered = CARDS.filter(this.compareCards);
      let scoreUpdated = SCORE + 100;
      CARDS = cardsFiltered;
      SCORE = scoreUpdated;

      this.setState({ cards: cardsFiltered, score: scoreUpdated });
      console.log(this.state.cards);
    }
    if (PAIR.length >= 2 && KEYS.length >= 2) {
      PAIR = [];
      KEYS = [];
    }
  };

  newGameHandler = () => {
    CARDS = CARDS_COPY;
    SCORE = 0;
    this.setState({ cards: CARDS, score: SCORE })
  }

  render() {
    return (
      <Aux>
        <div className={classes.Game}>
          <Board
            cards={this.state.cards}
            cardClick={this.cardClickHandler}
            
          />
          <ScorePanel score={this.state.score} click={this.newGameHandler}/>
        </div>
      </Aux>
    );
  }
}

export default Game;
