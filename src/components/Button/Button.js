import React from 'react';

import classes from './Button.module.css';

const button = (props) => {
    let button = null;

    switch (props.type) {
        case 'NewGame':
        button = (<button className={[classes.Button, classes.NewGame].join(" ")}>{props.content}</button>);
        break;
    }
    // const type = 'classes.' + props.type;
    return button;
}

export default button;