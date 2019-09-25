import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from "../../components/Board/Board";
import ScorePanel from "../../components/UI/ScorePanel/ScorePanel";
import Modal from "../../components/UI/Modal/Modal";
import ScoreSummary from "./ScoreSummary/ScoreSummary";
import classes from "./Game.module.css";

let CARDS = ["html", "css", "angular", "vue", "react", "js", "ruby"];
let DECK = [...CARDS]
  .map(el => el)
  .concat(CARDS)
  .sort((el1, el2) => Math.random() - Math.random());
let SCORE = 0;
let ROUND = 0;
let oneVisible = false;
let visible_nr;
let LOCK = false;
let pairsLeft = CARDS.length;

class Game extends Component {
  state = {
    cards: DECK,
    score: SCORE,
    round: ROUND,
    summary: false
  };

  cardClickHandler = (type, key) => {
    console.log(DECK[key]);
    if (LOCK == false) {
      LOCK = true;

      let image = `url("./img/${type}.png")`;
      let card = document.querySelector(`#c${key}`);
      let cardBack = document.querySelector(`#c${key} div:nth-child(2)`);
      let cardFront = document.querySelector(`#c${key} div:first-child`);
      console.log(cardBack, cardFront, card);

      cardBack.style.transform = 'rotateY(-180deg)';
      cardFront.style.transform = 'rotateY(0deg)';
      cardFront.style.backgroundImage = image;
      // card.classList.add("CardActive");
      if (oneVisible === false) {
        //first card
        oneVisible = true;
        visible_nr = key;
        LOCK = false;
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
    card.style.transform = "translateY(-100vh) scale(1.7)";
    card.style.opacity = "0";
    secondCard.style.transform = "translateY(-100vh) scale(1.7)";
    secondCard.style.opacity = "0";

    pairsLeft--;

    if (pairsLeft === 0) {
      this.showSummaryHandler();
    }

    LOCK = false;
  };

  backToBackHandler = (c1, c2) => {
    console.log("pudło");
    let firstCardBack = document.querySelector(`#c${c1} div:nth-child(2)`);
    let secondCardBack = document.querySelector(`#c${c2} div:nth-child(2)`);
    let firstCardFront = document.querySelector(`#c${c1} div:first-child`);
    let secondCardFront = document.querySelector(`#c${c2} div:first-child`);
    // card.style.backgroundImage = "url(./img/star.png)";
    // secondCard.style.backgroundImage = "url(./img/star.png)";
    firstCardFront.style.transform = 'rotateY(-180deg)';
    secondCardFront.style.transform = 'rotateY(-180deg)';
    firstCardBack.style.transform = 'rotateY(0deg)';
    secondCardBack.style.transform = 'rotateY(0deg)';

    LOCK = false;
  };

  backToBoardHandler = () => {
    let cards = document.querySelectorAll('div[id*="c"]');
    let cardsAr = Array.from(cards);

    let backs = document.querySelectorAll('div[class*="Back"]');
    let backsAr = Array.from(backs);

    let fronts = document.querySelectorAll('div[class*="Front"]');
    let frontsAr = Array.from(fronts);
    console.log(backsAr, frontsAr)

    cardsAr.forEach(card => {
      card.style.opacity = "1";
      card.style.transform = "translateY(0) scale(1)";
      // div.style.backgroundImage = "url(./img/star.png)";
    });

    frontsAr.forEach(front => {
      front.style.transform = 'rotateY(-180deg)';
    });

    backsAr.forEach(back => {
      back.style.transform = 'rotateY(0deg)';
    });
  }

  newGameHandler = () => {
    DECK = [...CARDS]
      .map(el => el)
      .concat(CARDS)
      .sort((el1, el2) => Math.random() - Math.random());
    SCORE = 0;
    ROUND = 1;
    this.setState({ score: SCORE, round: ROUND, cards: DECK });
  };

  nextRoundHandler = () => {
    DECK = [...CARDS]
      .map(el => el)
      .concat(CARDS)
      .sort((el1, el2) => Math.random() - Math.random());
    let updatedDeck = DECK;
    ROUND++;
    let updatedRound = ROUND;
    this.backToBoardHandler();
    console.log(DECK);
    this.setState({ cards: updatedDeck, round: updatedRound, summary: false });
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
          <Board cards={this.state.cards} cardClick={this.cardClickHandler} />
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
