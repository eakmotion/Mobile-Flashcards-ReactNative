import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Button from './Button';
import Colors from '../constants/Colors'

const QuizResult = (props) => {
  resetQuiz = () => {
    props.resetQuiz();
    props.navigation.navigate('Quiz', { deckId: props.title });
  };

  const { correct, totalQuiz, title, navigation } = props;

  return (
    <View>
      <Text style={styles.score}>
        Your score is {correct} out of {totalQuiz}.
      </Text>
      <Button onPress={() => this.resetQuiz()}>
        Restart Quiz
      </Button>
      <Button
        onPress={() => navigation.navigate('DeckDetail', { deckId: title })}>
        Back to Deck
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  score : {
    color     : Colors.textPrimary,
    textAlign : 'center',
    fontSize  : 25,
    padding   : 50
  }
});

export default withNavigation(QuizResult);
