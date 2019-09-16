import React from 'react';

import Button from '../../UI/Button/Button';
import classes from './ScorePanel.module.css';

const scorePanel = (props) => {
    return (
        <div className={classes.ScorePanel}>
            <span>Score: 100</span>
            <Button type={'NewGame'} content={'New Game'}/>
            <span>Time Left: 1:00</span>
        </div>
    )
};

export default scorePanel;