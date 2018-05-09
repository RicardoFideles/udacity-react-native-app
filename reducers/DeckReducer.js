import * as types from '../utils/constants';
const decks = (state = {}, action) => {
  switch (action.type) {
    case types.GET_DECKS:
      return {
        ...state,
        decks: [...action.decks],
      };
    case types.NEW_DECK:
      return {
        ...state,
        decks: [...state.decks, action.deck],
      };
    case types.NEW_QUESTION:
      return {
        ...state,
        decks: state.decks.map(d => {
          if (d.title == action.key) {
            d.questions.push(action.question);
          }
          return d;
        }),
      };
    default:
      return state;
  }
};

export default decks;
