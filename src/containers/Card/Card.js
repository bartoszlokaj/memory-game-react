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
    console.log('dupa');
  }

  render(){
    return(
      <div className={classes.Card} onClick={this.props.click}>
        <CardFront type={this.props.type}/>
        <CardBack click={this.rotateCardHandler}/>
      </div>
    );
  }
};

export default Card;