import React from "react";
import propTypes from "prop-types";

import classes from "./Card.module.css";

const card = props => {
  let card = null;

  switch (props.type) {
    case "angular":
      card = (
        <div
          className={[
            classes.Angular,
            classes.CardFront,
            classes.CardSide
          ].join(" ")}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
      break;
    case "vue":
      card = (
        <div
          className={[classes.Vue, classes.CardFront, classes.CardSide].join(
            " "
          )}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
      break;
    case "html":
      card = (
        <div
          className={[classes.Html, classes.CardFront, classes.CardSide].join(
            " "
          )}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
      break;
    case "css":
      card = (
        <div
          className={[classes.Css, classes.CardFront, classes.CardSide].join(
            " "
          )}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
      break;
    case "js":
      card = (
        <div
          className={[classes.Js, classes.CardFront, classes.CardSide].join(
            " "
          )}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
      break;
    case "react":
      card = (
        <div
          className={[classes.React, classes.CardFront, classes.CardSide].join(
            " "
          )}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
      break;
    case "ruby":
      card = (
        <div
          className={[classes.Ruby, classes.CardFront, classes.CardSide].join(
            " "
          )}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
      break;
    case "sass":
      card = (
        <div
          className={[classes.Sass, classes.CardFront, classes.CardSide].join(
            " "
          )}
          onClick={props.click}
          style={{
            transform: props.rotated ? "rotateY(0deg)" : "rotateY(-180deg)"
          }}
        ></div>
      );
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
