import { fetchDecks } from '../utils/api';

export const RECEIVE_DECKS = 'RECEIVE_DECKS';
export const ADD_DECK = 'ADD_DECK';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveDecks(decks) {
  return {
    type  : RECEIVE_DECKS,
    decks
  };
}

export function addDeck(deck) {
  return {
    type : ADD_DECK,
    deck
  };
}

export function addQuestion(question, deck) {
  return {
    type     : ADD_QUESTION,
    question,
    deck
  };
}

export function handleAddDeck({ deck }) {
  return (dispatch) => {
    return dispatch(addDeck(deck));
  };
}

export function handleAddQuestion({ question, deck }) {
  return (dispatch) => {
    return dispatch(addQuestion(question, deck));
  };
}

export function handleFetchDecks() {
  return (dispatch) => {
    return fetchDecks().then((decks) => dispatch(receiveDecks(decks)));
  };
}
