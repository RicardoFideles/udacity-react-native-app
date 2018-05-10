import * as types from '../utils/constants';
import { getDecks, addDeck, addNewQuestion } from '../utils/api';

export function fetchDecks() {
  return dispatch => {
    getDecks().then(data => {
      let decks = transformData(data);
      dispatch({ type: types.GET_DECKS, decks });
    });
  };
}

function transformData(data) {
  let decks = [];
  var obj = JSON.parse(data);
  if (obj) {
    const keys = Object.keys(obj);
    decks = keys.map(key => {
      return {
        title: obj[key].title,
        questions: obj[key].questions,
      };
    });
  }
  return decks;
}

export function newDeck(deck, callback) {
  return dispatch => {
    addDeck(deck.title, deck).then(res => {
      callback(null, true);
      dispatch({
        type: types.NEW_DECK,
        deck,
      });
    });
  };
}

export function newQuestion(newQuestion, key) {
  return dispatch => {
    addNewQuestion(newQuestion, key).then(res => {
      dispatch({
        type: types.NEW_QUESTION,
        key,
        newQuestion,
      });
    });
  };
}
