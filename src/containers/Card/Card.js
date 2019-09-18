import React, { Component } from 'react';

import CardFront from './CardFront/CardFront';
import classes from './Card.module.css';

class Card extends Component {
  render(){
    return(
      <div className={classes.Card} onClick={this.props.click}>
        <CardFront type={this.props.type}/>
      </div>
    );
  }
};

export default Card;