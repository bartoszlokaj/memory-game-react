import React from 'react';

import classes from './Card.module.css';

const cardBack = (props) => (
  <div className={[classes.CardSide, classes.CardBack].join(" ")} onClick={props.click}></div>
);

export default cardBack;