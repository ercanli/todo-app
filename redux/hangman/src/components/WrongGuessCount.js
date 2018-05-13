import React, { Component } from "react";

import { wrongGuessCount } from "../lib/game";

import "./WrongGuessCount.css";

class WrongGuessCount extends Component {
  render() {
    const numberOfWrongGuesses = wrongGuessCount(
      this.props.word,
      this.props.guesses
    );

    return (
      <div className="WrongGuessCount">
        <p className="WrongGuessCount-text">
          Wrong guess count: {numberOfWrongGuesses}
        </p>
      </div>
    );
  }
}

export default WrongGuessCount;
