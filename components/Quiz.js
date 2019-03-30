import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, StyleSheet } from 'react-native';
import CardDeck from './CardDeck';
import QuizResult from './QuizResult';
import Colors from '../constants/Colors';

class Quiz extends Component {
  state = {
    index      : 0,
    correct    : 0,
    incorrect  : 0,
    showAnswer : false
  };

  static navigationOptions = {
    title : 'Quiz'
  };

  nextCard = () => {
    const { index } = this.state

    if (index < this.props.deck.questions.length - 1) {
      this.setState({
        index : index + 1
      });
    }
  };

  gradeAnswer = (isCorrect) => {
    const { correct, incorrect } = this.state

    if (correct + incorrect < this.props.deck.questions.length) {
      if (isCorrect) {
        this.setState({
          correct : correct + 1
        });
      } else {
        this.setState({
          incorrect : incorrect + 1
        });
      }
    }
  };

  handleAnswer = (isCorrect) => {
    this.nextCard();
    this.gradeAnswer(isCorrect);
  };

  resetQuiz = () => {
    this.setState({
      index     : 0,
      correct   : 0,
      incorrect : 0
    });
  };

  render() {
    const { index, correct, incorrect } = this.state;
    const { deck, deckId } = this.props;
    const totalScore = correct + incorrect;

    return (
      <View>
        <Text style={styles.score}>
          {totalScore} / {deck.questions.length}
        </Text>
        {totalScore !== deck.questions.length ? (
          <CardDeck deck={deck} index={index} correct={correct} handleAnswer={this.handleAnswer} />
        ) : (
          <QuizResult
            title={deckId}
            correct={correct}
            totalQuiz={deck.questions.length}
            resetQuiz={this.resetQuiz}
          />
        )}
      </View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    deckId,
    deck: state[deckId]
  };
}

const styles = StyleSheet.create({
  score: {
    color: Colors.textPrimary,
    fontSize: 20,
    padding: 15
  }
});

export default connect(mapStateToProps)(Quiz);
