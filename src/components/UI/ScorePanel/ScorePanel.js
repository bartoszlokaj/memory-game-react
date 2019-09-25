import React from 'react';

import Button from '../../UI/Button/Button';
import classes from './ScorePanel.module.css';

const scorePanel = (props) => {
    return (
        <div className={classes.ScorePanel}>
            <span>Score: {props.score}</span>
            <Button type={'NewGame'} content={'New Game'} click={props.click}/>
            <span>Time Left: 1:00</span>
            <div className={classes.Round}>{props.round}</div>
        </div>
    )
};

export default scorePanel;