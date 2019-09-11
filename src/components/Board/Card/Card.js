import React from "react";
import propTypes from "prop-types";

import classes from "./Card.module.css";

const card = props => {
  let card = null;

  switch (props.type) {
    case "angular":
      card = <div className={[classes.Angular, classes.Card].join(" ")}></div>;
      break;
    case "vue":
      card = <div className={[classes.Vue, classes.Card].join(" ")}></div>;
      break;
    case "html":
      card = <div className={[classes.Html, classes.Card].join(" ")}></div>;
      break;
    case "css":
      card = <div className={[classes.Css, classes.Card].join(" ")}></div>;
      break;
    case "js":
      card = <div className={[classes.Js, classes.Card].join(" ")}></div>;
      break;
    case "react":
      card = <div className={[classes.React, classes.Card].join(" ")}></div>;
      break;
    case "ruby":
      card = <div className={[classes.Ruby, classes.Card].join(" ")}></div>;
      break;
    case "sass":
      card = <div className={[classes.Sass, classes.Card].join(" ")}></div>;
      break;
    default:
      card = null;
  }
  return card;
};

card.propTypes = {
  type: propTypes.string.isRequired
};

export default card;
