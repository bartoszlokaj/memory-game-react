import React, { Component } from 'react';

import CardFront from './CardFront';
import CardBack from './CardBack';
import classes from './Card.module.css';

class Card extends Component {
  state = {
    rotated: false,
    paired: false
  }

  rotateCardHandler = () => {
    this.setState({ rotated: true });
    console.log('dupa');
  }

  render(){
    return (
      <div className={classes.Card} onClick={this.props.click}>
        <CardFront type={this.props.type} rotated={this.state.rotated} />
        <CardBack click={this.rotateCardHandler} rotated={this.state.rotated} />
      </div>
    );
  }
};

export default Card;