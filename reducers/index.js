import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION } from '../actions';

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      };
    case ADD_DECK:
      return {
        ...state,
        ...action.deck
      };
    case ADD_QUESTION:
      const { question, deck } = action;

      return {
        ...state,
        [deck.title]: {
          ...state[deck.title],
          questions : [ ...state[deck.title].questions, question ]
        }
      };
    default:
      return state;
  }
}
