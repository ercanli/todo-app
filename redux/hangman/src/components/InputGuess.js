import React, { Component } from "react";
import { connect } from "react-redux";

import {} from "../lib/game";
import { makeGuess } from "../actions/game";

import "./InputGuess.css";

class InputGuess extends Component {
  constructor(props) {
    super(props);

    this.state = {
      letterGuessAttempt: ""
    };
  }

  handleInputChange = event => {
    event.preventDefault();

    let letterGuessAttempt = event.target.value;

    if (letterGuessAttempt.length > 1) {
      letterGuessAttempt = event.target.value[event.target.value.length - 1];
    }

    this.setState({
      letterGuessAttempt
    });
  };

  guessLetter = () => {
    this.props.makeGuess(this.state.letterGuessAttempt);
  };

  render() {
    return (
      <div className="InputGuess">
        <input
          value={this.state.letterGuessAttempt}
          onChange={this.handleInputChange}
        />
        <button onClick={this.guessLetter}>Guess letter</button>
      </div>
    );
  }
}

const mapStateToProps = ({ word, guesses }) => {
  return {
    word,
    guesses
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    makeGuess: letterGuessAttempt => {
      makeGuess(letterGuessAttempt)(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(InputGuess);
