import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from '../../components/Board/Board';

class Game extends Component {

    state = {
        cards: ['html','css','angular','vue','react','js','ruby']
    }

    clickHandler = () => {
      console.log('dupa');
    }

  render() {
    return (
      <Aux>
        <Board cards={this.state.cards} click={this.clickHandler}/>
        <div>Panel</div>
      </Aux>
    );
  }
}

export default Game;