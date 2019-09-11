import React from "react";

import Aux from "../../hoc/Auxiliary";
import classes from './Layout.module.css';

const layout = props => (
  <Aux>
    <div>Toolbar, Sidedrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    <div>Footer</div>
  </Aux>
);

export default layout;
