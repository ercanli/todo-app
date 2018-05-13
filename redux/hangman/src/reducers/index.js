import { NEW_GAME, MAKE_GUESS } from '../actions/game';

const initialState = {
  word: '',
  guesses: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_GAME: {
      const nextState = Object.assign({}, state);

      // set the word to the random word (provided by the payload in the dispatched action)
      nextState.word = action.payload;

      return nextState;
    }
    case MAKE_GUESS: {
      const nextState = Object.assign({}, state);

      // add the 'letter guess attempt' (provided by the payload of the dispatched action to the guesses array)
      nextState.guesses = [].concat(state.guesses, action.payload);

      return nextState;
    }
    default: {
      return state;
    }
  }
};

export default reducer;
