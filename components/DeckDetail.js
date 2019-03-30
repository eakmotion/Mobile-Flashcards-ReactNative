import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Alert, StyleSheet, Animated } from 'react-native';
import Button from './Button';
import Colors from '../constants/Colors';

class DeckDetail extends Component {
  state = {
    opacity     : new Animated.Value(0),
    bounceValue : new Animated.Value(0.98)
  };

  componentDidMount() {
    const { opacity, bounceValue } = this.state;

    Animated.sequence([
      Animated.timing(opacity, { toValue: 1, duration: 200 }),
      Animated.timing(bounceValue, { duration: 200, toValue: 1 })
    ]).start();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title : navigation.state.params.deckId
    };
  };

  render() {
    const { deck, navigation } = this.props;
    const { opacity, bounceValue } = this.state;

    return (
      <Animated.View
        style={[ styles.container, { opacity, transform: [ { scale: bounceValue } ] } ]}>
        <Text style={styles.header}>{deck.title}</Text>
        <Text style={styles.body}>{deck.questions.length} cards</Text>
        <View style={styles.buttonGroup}>
          <Button onPress={() => navigation.navigate('AddCard', { deckId: deck.title })}>
            Add Card
          </Button>
          {deck.questions.length > 0 && (
            <Button onPress={() => navigation.navigate('Quiz', { deckId: this.props.deck.title })}>
              Start Quiz
            </Button>
          )}
        </View>
      </Animated.View>
    );
  }
}

function mapStateToProps(state, { navigation }) {
  const { deckId } = navigation.state.params;

  return {
    deckId,
    deck   : state[deckId]
  };
}

const styles = StyleSheet.create({
  container   : {
    flex          : 1,
    alignItems    : 'center',
    margin        : 10,
    paddingTop    : 20,
    paddingBottom : 30
  },
  header      : {
    fontSize : 50,
    color    : Colors.textPrimary,
    padding  : 5
  },
  body        : {
    fontSize      : 30,
    color         : Colors.textSecondary,
    paddingBottom : 35,
    paddingTop    : 5
  },
  buttonGroup : {
    flexDirection  : 'row',
    justifyContent : 'center'
  }
});

export default connect(mapStateToProps)(DeckDetail);
