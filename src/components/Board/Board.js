import React from 'react';

import Card from './Card/Card';
import ScorePanel from '../UI/ScorePanel/ScorePanel';
import classes from './Board.module.css';

const board = props => {

    const cards = Array(...props.cards);
    const cardsDouble = cards.map((el) => el);
    const pairs = cards.concat(cardsDouble);

    pairs.sort((el1, el2) => Math.random() - Math.random());

    const transformedPairs = pairs.map((el, index) => {
        return <Card type={el} key={index} click={() => props.cardClick(el,index)} />;
    });

    console.log(transformedPairs);

    return (
        <div className={classes.Board}>
            {transformedPairs}
            <ScorePanel/>
        </div>
    );
}

export default board;