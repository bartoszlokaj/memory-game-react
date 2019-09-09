import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Board from '../../components/Board/Board';

class Game extends Component {

    state = {
        cards: {
            html: 2,
            css: 2,
            js: 2,
            react: 2,
            angular: 2,
            vue: 2,
            ruby: 2,
            sass: 2
        }
    }

  render() {
    return (
      <Aux>
        <Board cards={this.state.cards}/>
        <div>Panel</div>
      </Aux>
    );
  }
}

export default Game;