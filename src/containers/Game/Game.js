import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from '../../components/Board/Board';

let PAIR = [];

class Game extends Component {

    state = {
        cards: ['html','css','angular','vue','react','js','ruby'],
        score: 0
    }

    cardClickHandler = (type) => {
      console.log(type);
      PAIR.push(type);
      console.log(PAIR);

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