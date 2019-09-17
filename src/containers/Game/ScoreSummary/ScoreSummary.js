import React from 'react';

import Button from '../../../components/UI/Button/Button';
import Aux from '../../../hoc/Auxiliary';

const scoreSummary = (props) => {
    const score = props.score;
    return (
        <Aux>
            <h3>So far: {score} points</h3>
            <h4>Keep going, man!</h4>
            <p>Time is valiuable</p>
            <Button content={'Next round'}/>
        </Aux>
    );
};

export default scoreSummary;