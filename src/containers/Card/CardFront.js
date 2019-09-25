import React from "react";
import propTypes from "prop-types";

import classes from "./Card.module.css";

const card = () => <div className={[classes.CardSide, classes.CardFront].join(" ")}></div>

export default card;
