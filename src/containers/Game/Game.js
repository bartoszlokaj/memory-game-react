import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from "../../components/Board/Board";
import ScorePanel from "../../components/UI/ScorePanel/ScorePanel";
import Modal from "../../components/UI/Modal/Modal";
import ScoreSummary from "./ScoreSummary/ScoreSummary";
import classes from "./Game.module.css";

let PAIR = [];
let KEYS = [];
let CARDS = ["html", "css", "angular", "vue", "react", "js", "ruby"];
let DECK = [...CARDS]
  .map(el => el)
  .concat(CARDS)
  .sort((el1, el2) => Math.random() - Math.random());
let SCORE = 0;
let ROUND = 0;
let oneVisible = false;
let visible_nr;
let lock = false;
let pairsLeft = CARDS.length
console.log(pairsLeft);

class Game extends Component {
  state = {
    newGame: false,
    cards: DECK,
    coverCards: false,
    isPair: 0,
    score: SCORE,
    round: ROUND,
    summary: false
  };

  compareCards = type => {
    return type !== PAIR[0];
  };

  cardClickHandler = (type, key) => {
    console.log(DECK[key]);
    if (lock == false) {
      lock = true;

      let image = `url("./img/${type}.png")`;
      let card = document.querySelector(`#c${key}`);

      card.style.backgroundImage = image;
      card.classList.add("CardActive");
      if (oneVisible === false) {
        //first card
        oneVisible = true;
        visible_nr = key;
        lock = false;
      } else {
        //second card
        if (DECK[visible_nr] === DECK[key] && visible_nr !== key) {
          setTimeout(() => {
            this.hideCardsHandler(visible_nr, key);
          }, 750);
        } else {
          setTimeout(() => {
            this.backToBackHandler(visible_nr, key);
          }, 1200);
        }

        ROUND++;
        let updatedRound = ROUND;

        this.setState({ round: updatedRound });
        oneVisible = false;
      }
    }
  };

  hideCardsHandler = (c1, c2) => {
    console.log("para");
    let card = document.querySelector(`#c${c1}`);
    let secondCard = document.querySelector(`#c${c2}`);
    card.style.transform = "translateY(-100vh)";
    secondCard.style.transform = "translateY(-100vh)";

    pairsLeft--;

    if(pairsLeft === 0) {
      this.setState({ summary: true });
    }

    lock = false;
  };

  backToBackHandler = (c1, c2) => {
    console.log("pudło");
    let card = document.querySelector(`#c${c1}`);
    let secondCard = document.querySelector(`#c${c2}`);
    card.style.backgroundImage = "url(./img/angular.png)";
    secondCard.style.backgroundImage = "url(./img/angular.png)";

    lock = false;
  };

  newGameHandler = () => {
    DECK = [...CARDS]
      .map(el => el)
      .concat(CARDS)
      .sort((el1, el2) => Math.random() - Math.random());
    SCORE = 0;
    ROUND = 1;
    this.setState({ score: SCORE, round: ROUND, cards: DECK, newGame: true });
  };

  nextRoundHandler = () => {
    DECK = [...CARDS]
      .map(el => el)
      .concat(CARDS)
      .sort((el1, el2) => Math.random() - Math.random());
    ROUND = ROUND + 1;
    this.setState({ cards: DECK, round: ROUND, summary: false });
  };

  showSummaryHandler = () => {
    this.setState({ summary: true });
  };

  render() {
    return (
      <Aux>
        <Modal show={this.state.summary}>
          <ScoreSummary
            score={this.state.score}
            round={this.state.round}
            click={this.nextRoundHandler}
          />
        </Modal>
        <div className={classes.Game}>
          <Board
            newGame={this.state.newGame}
            cards={this.state.cards}
            cardClick={this.cardClickHandler}
            cover={this.state.coverCards}
          />
          <ScorePanel
            score={this.state.score}
            click={this.newGameHandler}
            round={this.state.round}
          />
        </div>
      </Aux>
    );
  }
}

export default Game;
