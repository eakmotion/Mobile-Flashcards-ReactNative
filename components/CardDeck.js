import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';
import Colors from '../constants/Colors';

export default class CardDeck extends Component {
  state = {
    showAnswer : false
  };

  handleAnswer = (ans) => {
    this.props.handleAnswer(ans);
    this.setState({ showAnswer: false });
  };

  render() {
    const { deck, index } = this.props;
    const { showAnswer } = this.state;

    return (
      <View>
        <Text style={styles.ansQuest}>
          {showAnswer ? deck.questions[index].answer : deck.questions[index].question}
        </Text>
        <Button
          textOnly={true}
          style={{ fontSize: 20, color: Colors.textSecondary }}
          onPress={() => this.setState({ showAnswer: !this.state.showAnswer })}>
          {showAnswer ? 'Question' : 'Check Answer'}
        </Button>

        <View style={styles.btnGroup}>
          <Button onPress={() => this.handleAnswer(true)}>Correct</Button>
          <Button onPress={() => this.handleAnswer(false)}>Incorrect</Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ansQuest : {
    color     : Colors.textPrimary,
    fontSize  : 25,
    padding   : 10,
    textAlign : 'center'
  },
  btnGroup : {
    flexDirection  : 'row',
    justifyContent : 'center'
  }
});
