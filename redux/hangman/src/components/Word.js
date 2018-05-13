import React, { Component } from "react";

import { showGuess } from "../lib/game";

import "./Word.css";

class Word extends Component {
  render() {
    const displayedtext = showGuess(this.props.word, this.props.guesses);

    return (
      <div className="Word">
        <h1 className="Word-text">{displayedtext}</h1>
      </div>
    );
  }
}

export default Word;
