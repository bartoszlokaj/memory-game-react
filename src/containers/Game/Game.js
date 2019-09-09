import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import Board from '../../components/Board/Board';

class Game extends Component {
  render() {
    return (
      <Aux>
        <Board />
        <div>Panel</div>
      </Aux>
    );
  }
}

export default Game;