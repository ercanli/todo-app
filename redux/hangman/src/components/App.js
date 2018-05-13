import React, { Component } from 'react';
import { connect } from 'react-redux';

import Title from './Title';
import WrongGuessCount from './WrongGuessCount';
import Word from './Word';
import InputGuess from './InputGuess';

import { newGame } from '../actions/game';

import './App.css';

class App extends Component {
  render() {
    console.log({ props: this.props });

    return (
      <div className="App">
        <Title text="Hang-Man" />
        <p className="App-intro">
          Welcome to Hangman! Click start to begin a new game
        </p>
        <WrongGuessCount word={this.props.word} guesses={this.props.guesses} />
        <Word word={this.props.word} guesses={this.props.guesses} />
        <InputGuess />
        <button onClick={this.props.handleGameStartClick}>
          Start new game
        </button>
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
    handleGameStartClick: () => {
      newGame(dispatch);
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
