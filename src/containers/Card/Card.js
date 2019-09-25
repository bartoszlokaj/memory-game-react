import React, { Component } from "react";

import CardFront from "./CardFront";
import CardBack from "./CardBack";
import classes from "./Card.module.css";

const STYLE = {
  transform: 'translateY(-100vh) scale(2)',
  opacity: '0',
}

class Card extends Component {
  state = {
    rotatedFront: false,
    paired: false,
    animate: false
  };


  rotateToFrontHandler = () => {
    // this.setState({ rotatedFront: true });
  };

  rotateToBackHandler = () => {
    // this.setState({ rotatedFront: false });
  };

  render() {
    return (
      <div className={classes.Card} id={this.props.id} onClick={this.props.click} style={
        this.state.animate ? STYLE : null
      }>
        <CardFront />
        <CardBack />
      </div>
    );
  }
}

export default Card;
