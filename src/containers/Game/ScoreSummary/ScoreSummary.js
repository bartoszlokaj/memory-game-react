import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../../components/UI/Button/Button';

const scoreSummary = (props) => {
    return (
        <Aux>
            <h2>So far: <strong>{props.score}</strong> points</h2>
            <h4>After {props.turn} turns</h4>
            <h4>Keep going, man!</h4>
            <p>Time is valiuable</p>
            <Button content={'Next round'} click={props.click}/>
        </Aux>
    );
};

export default scoreSummary;