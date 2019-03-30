import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';
import Colors from '../constants/Colors';

const Deck = (props) => {
  const { title, total, navigation } = props;

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DeckDetail', { deckId: title })}
      style={styles.container}>
      <View style={styles.deckContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.body}>{total} cards</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container     : {
    alignItems      : 'center',
    backgroundColor : Colors.buttonBackground,
    borderRadius    : 5,
    margin          : 10,
    shadowRadius    : 2,
    shadowOpacity   : 0.5,
    shadowOffset    : {
      height : 1,
      width  : 0
    }
  },
  deckContainer : {
    alignItems    : 'center',
    paddingTop    : 20,
    paddingBottom : 20
  },
  header        : {
    color    : Colors.buttonText,
    fontSize : 30
  },
  body          : {
    color    : Colors.butttonTextSecondary,
    fontSize : 20
  }
});

export default withNavigation(Deck);
