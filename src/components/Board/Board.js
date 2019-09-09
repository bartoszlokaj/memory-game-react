import React from 'react';

import classes from './Board.module.css';
import Card from './Card/Card';

const board = props => {
    const transformedCards = Object.keys(props.cards)
        .map(igKey => {
            return [...Array(props.cards[igKey])].map((_, i) => {
                return <Card key={igKey + i} type={igKey} />
            });
        });

    return (
        <div className={classes.Board}>
            {transformedCards}
        </div>
    );
}

export default board;