import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from '../../components/Board/Board';

class Game extends Component {

    state = {
        cards: ['html','css','angular','vue','react','js','ruby'],
        score: 0
    }

    removePairHandler = (type) => {
      console.log(type);
    }

  render() {
    return (
      <Aux>
        <Board cards={this.state.cards} cardClick={this.removePairHandler}/>
        <div>Panel</div>
      </Aux>
    );
  }
}

export default Game;