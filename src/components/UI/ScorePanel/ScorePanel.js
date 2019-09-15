import React from 'react';

import classes from './ScorePanel.module.css';

const scorePanel = (props) => {
    return (
        <div className={classes.ScorePanel}>
            <span>Score: 100</span>
            <span>Time Left: 1:00</span>
        </div>
    )
};

export default scorePanel;