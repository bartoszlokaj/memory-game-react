import React from "react";

import Aux from "../../hoc/Auxiliary";
import Toolbar from '../UI/Toolbar/Toolbar';
import classes from './Layout.module.css';

const layout = props => (
  <Aux>
    <Toolbar/>
    <main className={classes.Content}>
        {props.children}
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;
