import React, { Component } from "react";

import Aux from "../../hoc/Auxiliary";
import Board from "../../components/Board/Board";
import ScorePanel from "../../components/UI/ScorePanel/ScorePanel";
import Modal from '../../components/UI/Modal/Modal';
import ScoreSummary from './ScoreSummary/ScoreSummary';
import classes from "./Game.module.css";

let PAIR = [];
let KEYS = [];
let CARDS = ["html", "css", "angular", "vue", "react", "js", "ruby"];
let DECK = [...CARDS].map(el => el).concat(CARDS).sort((el1, el2) => Math.random() - Math.random());
let SCORE = 0;
let ROUND = 1;

class Game extends Component {
  state = {
    newGame: false,
    cards: DECK,
    score: SCORE,
    round: ROUND,
    summary: false,
  };

  compareCards = type => {
    return type !== PAIR[0];
  };

  cardClickHandler = (type, key) => {
    this.setState({ gameStart: false })
    KEYS.push(key);
    PAIR.push(type);

    if (PAIR[0] === PAIR[1] && KEYS[0] !== KEYS[1]) {
      let cardsFiltered = DECK.filter(this.compareCards);
      let scoreUpdated = SCORE + 100;
      DECK = cardsFiltered;
      SCORE = scoreUpdated;

      this.setState({ cards: cardsFiltered, score: scoreUpdated });
    }
    if (PAIR.length >= 2 && KEYS.length >= 2) {
      PAIR = [];
      KEYS = [];
    }
    if(DECK.length === 0) {
      this.showSummaryHandler();
    }
  };

  newGameHandler = () => {
    this.newDeckHandler(CARDS);
    CARDS = DECK;
    SCORE = 0;
    ROUND = 1;
    this.setState({ cards: CARDS, score: SCORE, round: ROUND })
  }

  newDeckHandler = (deck) => {
    const newDeck = [...deck].map(el => el).concat(deck).sort((el1, el2) => Math.random() - Math.random());
    console.log(newDeck);
  }

  nextRoundHandler = () => {
    CARDS = DECK;
    ROUND = ROUND + 1;
    this.setState({ cards: CARDS, round: ROUND, summary: false })
  }

  showSummaryHandler = () => {
    this.setState({ summary: true })
  }

  render() {
    return (
      <Aux>
        <Modal show={this.state.summary}>
          <ScoreSummary score={this.state.score} round={this.state.round} click={this.nextRoundHandler}/>
        </Modal>
        <div className={classes.Game}>
          <Board
            newGame={this.state.newGame}
            cards={this.state.cards}
            cardClick={this.cardClickHandler}
          />
          <ScorePanel score={this.state.score} click={this.newGameHandler}/>
        </div>
      </Aux>
    );
  }
}

export default Game;
