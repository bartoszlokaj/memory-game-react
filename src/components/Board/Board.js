import React from 'react';

import classes from './Board.module.css';
import Card from './Card/Card';

const board = props => {
    // const transformedCards = Object.keys(props.cards)
    //     .map(igKey => {
    //         return [...Array(props.cards[igKey])].map((_, i) => {
    //             return <Card key={igKey + i} type={igKey} /> 
    //         });
    //     });

    const cards = Array(...props.cards);
    const cardsDouble = cards.map((el) => el);
    const pairs = cards.concat(cardsDouble);

    pairs.sort((el1, el2) => Math.random() - Math.random());
    console.log(pairs);

    const transformedPairs = pairs.map((el, index) => {
        return <Card type={el} key={index}/>
    });

    console.log(transformedPairs);

    return (
        <div className={classes.Board}>
            {transformedPairs}
        </div>
    );
}

export default board;