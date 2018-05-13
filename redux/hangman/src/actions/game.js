import { randomWord } from "../lib/game";

export const NEW_GAME = "NEW_GAME";
export const MAKE_GUESS = "MAKE_GUESS";

export const newGame = dispatch => {
  const newWord = randomWord();

  dispatch({
    type: NEW_GAME,
    payload: newWord
  });
};

export const makeGuess = letterGuessAttempt => dispatch => {
  dispatch({
    type: MAKE_GUESS,
    payload: letterGuessAttempt
  });
};
