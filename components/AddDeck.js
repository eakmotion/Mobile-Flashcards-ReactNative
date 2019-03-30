import React, { Component } from 'react';
import { connect } from 'react-redux';
import { KeyboardAvoidingView, Text, TextInput, StyleSheet } from 'react-native';
import { handleAddDeck } from '../actions';
import Button from './Button';
import Colors from '../constants/Colors';

class AddDeck extends Component {
  state = {
    title : ''
  };

  static navigationOptions = {
    title : 'Add Deck'
  };

  handleSubmit = () => {
    const { dispatch, navigation } = this.props;
    const newDeck = {
      [this.state.title]: {
        title     : this.state.title,
        questions : []
      }
    };

    dispatch(handleAddDeck({ deck: newDeck }));
    navigation.navigate('DeckDetail', { deckId: this.state.title });
    this.setState({ title: '' });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior='padding' enabled>
        <Text style={styles.header}>Your deck title?</Text>
        <TextInput
          style={styles.input}
          onChangeText={(title) => this.setState({ title })}
          value={this.state.title}
          maxLength={40}
          placeholder='Deck title'
          autoFocus={true}
        />
        <Button onPress={() => this.handleSubmit()}>Create Deck</Button>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  iconWrap : {
    flexDirection : 'row',
    alignItems    : 'center'
  },
  icon     : {
    margin : 10
  },
  iconText : {
    fontSize : 17
  },
  header   : {
    textAlign  : 'center',
    fontSize   : 30,
    color      : Colors.textPrimary,
    padding    : 50,
    paddingTop : 0
  },
  input    : {
    borderWidth  : 1,
    borderColor  : Colors.textSecondary,
    borderRadius : 5,
    padding      : 20,
    margin       : 40,
    marginBottom : 20,
    marginTop    : -20,
    fontSize     : 20
  }
});

export default connect()(AddDeck);
