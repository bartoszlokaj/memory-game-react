import React, { Component } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import classes from "./Card.module.css";

class Card extends Component {
  state = {
    rotatedFront: false,
    paired: false
  };


  rotateToFrontHandler = () => {
    this.setState({ rotatedFront: true });
  };

  rotateToBackHandler = () => {
    this.setState({ rotatedFront: false });
  };

  render() {
    return (
      <div className={classes.Card} onClick={this.props.click}>
        <CardFront
          type={this.props.type}
          click={this.rotateToBackHandler}
          rotatedFront={this.state.rotatedFront}
        />
        <CardBack
          click={this.rotateToFrontHandler}
          rotatedFront={this.state.rotatedFront}
        />
      </div>
    );
  }
}

export default Card;
