import React from 'react';

import Card from '../Card/Card';
import classes from './Grid.module.css';

const grid = props => {
    return (
        <div className={classes.Grid} >
            {props.children}
        </div>
    );
}


export default grid;