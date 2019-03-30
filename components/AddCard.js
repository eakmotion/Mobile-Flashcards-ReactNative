import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, TextInput, StyleSheet } from 'react-native';
import { handleAddQuestion } from '../actions';
import Button from './Button';
import Colors from '../constants/Colors';

class AddCard extends Component {
  state = {
    question : '',
    answer   : ''
  };

  static navigationOptions = {
    title : 'Add Card'
  };

  handleSubmit = () => {
    const { dispatch, deck, navigation } = this.props;

    const question = {
      question : this.state.question,
      answer   : this.state.answer
    };

    dispatch(handleAddQuestion({ question, deck }));
    navigation.goBack();
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior='padding' enabled>
        <TextInput
          style={styles.input}
          onChangeText={(question) => this.setState({ question })}
          value={this.state.text}
          maxLength={40}
          autoFocus={true}
          placeholder='Your question'
        />
        <TextInput
          style={styles.input}
          onChangeText={(answer) => this.setState({ answer })}
          value={this.state.answer}
          maxLength={40}
          placeholder='Your answer'
        />
        <Button onPress={() => this.handleSubmit()}>Submit</Button>
      </KeyboardAvoidingView>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;
  return {
    decks : state,
    deck  : state[deckId]
  };
}

const styles = StyleSheet.create({
  container    : {
    alignItems : 'center'
  },
  header       : {
    textAlign : 'center',
    fontSize  : 30,
    color     : Colors.textPrimary,
    padding   : 30
  },
  input        : {
    textAlign    : 'center',
    minWidth     : 300,
    borderWidth  : 1,
    borderColor  : Colors.textSecondary,
    borderRadius : 5,
    padding      : 20,
    marginTop    : 20,
    marginBottom : 20,
    fontSize     : 20
  },
  radioButtons : {
    marginTop : -30
  }
});

export default connect(mapStateToProps)(AddCard);
