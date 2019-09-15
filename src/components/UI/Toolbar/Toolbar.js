import React from "react";

import Button from '../../Button/Button';
import classes from "./Toolbar.module.css";

const toolbar = props => {
   return (
        <header className={classes.Toolbar}>
            <Button type={'NewGame'} content={'New Game'}/>
        </header>
    )
};

export default toolbar;
