import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from '../../components/Board/Board';

let PAIR = [];
let CARDS = ['html','css','angular','vue','react','js','ruby']

class Game extends Component {

    state = {
        cards: CARDS,
        score: 0
    }

    compareHandler = (type) => {
      return type !== PAIR[0];
    }

    cardClickHandler = (type) => {
      console.log(type);
      PAIR.push(type);
      console.log(PAIR);

      if(PAIR[0] === PAIR[1]) {
        console.log('bravo!');
        let cardsFiltered = CARDS.filter(this.compareHandler);
        CARDS = cardsFiltered;
        console.log(cardsFiltered);
      }
      if(PAIR.length >= 2) {
        PAIR = [];
      }
    }

  render() {
    return (
      <Aux>
        <Board cards={this.state.cards} cardClick={this.cardClickHandler}/>
        <div>Panel</div>
      </Aux>
    );
  }
}

export default Game;