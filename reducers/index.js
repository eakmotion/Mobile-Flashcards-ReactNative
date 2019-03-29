import { RECEIVE_DECKS } from "../actions";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS :
      const { decks } = action;
      return {
        ...state,
        ...decks
      }
    default :
      return state
  }
}
