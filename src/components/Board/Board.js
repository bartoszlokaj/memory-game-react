import React from 'react';

import classes from './Board.module.css';
import Card from './Card/Card';

const board = props => {
    return (
        <div className={classes.Board}>
            <Card type='angular'/>
            <Card type='vue'/>
            <Card type='ruby'/>
            <Card type='react'/>
            <Card type='js'/>
            <Card type='css'/>
            <Card type='html'/>
            <Card type='sass'/>
        </div>
    );
}

export default board;