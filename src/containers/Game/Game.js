import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from "../../components/Board/Board";

let PAIR = [];
let KEYS = [];
let CARDS = ["html", "css", "angular", "vue", "react", "js", "ruby"];
let CARDS_COPY = ["html", "css", "angular", "vue", "react", "js", "ruby"];

class Game extends Component {
  state = {
    grid: CARDS_COPY,
    cards: CARDS,
    score: 0
  };
  
  compareCards = type => {
    return type !== PAIR[0];
  };

  cardClickHandler = (type, key) => {
    KEYS.push(key);
    PAIR.push(type);
    console.log(PAIR);
    console.log(KEYS);
    console.log(this.state.grid);

    if (PAIR[0] === PAIR[1] && KEYS[0] !== KEYS[1]) {
      let cardsFiltered = CARDS.filter(this.compareCards);
      CARDS = cardsFiltered;
      this.setState({ cards: cardsFiltered });
      console.log(this.state.cards);
    }
    if (PAIR.length >= 2 && KEYS.length >= 2) {
      PAIR = [];
      KEYS = [];
    }
  };

  render() {
    return (
      <Aux>
        <Board grid={this.state.grid} cards={this.state.cards} cardClick={this.cardClickHandler}/>
      </Aux>
    );
  }
}

export default Game;
