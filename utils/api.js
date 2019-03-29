import { AsyncStorage } from "react-native";

const STORE_KEY = "SECRET_STORE_KEY";

let decks = {
  React: {
    title: 'React',
    questions: [
      {
        question: 'What is React?',
        answer: 'A library for managing user interfaces'
      },
      {
        question: 'Where do you make Ajax requests in React?',
        answer: 'The componentDidMount lifecycle event'
      }
    ]
  },
  JavaScript: {
    title: 'JavaScript',
    questions: [
      {
        question: 'What is a closure?',
        answer: 'The combination of a function and the lexical environment within which that function was declared.'
      }
    ]
  }
}

export function fetchDecks() {
  return AsyncStorage.getItem(STORE_KEY)
    .then(results => {
      if (results === null) {
        AsyncStorage.setItem(STORE_KEY, JSON.stringify(decks));
        return decks;
      } else {
        return JSON.parse(results);
      }
  });
}

export function saveDeck({ title, deck }) {
  return AsyncStorage.mergeItem(STORE_KEY, JSON.stringify({
    [title]: deck
  }));
}

export function saveCard(deck, card) {
  deck.questions.push(card);
  return AsyncStorage.mergeItem(STORE_KEY, JSON.stringify(decks));
}
