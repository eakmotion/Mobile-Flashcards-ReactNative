import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import Colors from '../constants/Colors'

const Deck = (props) => {
  const { title, total } = props;
  
  return (
    <TouchableOpacity
      style={styles.container}>
      <View style={styles.deckContainer}>
        <Text style={styles.header}>{title}</Text>
        <Text style={styles.body}>{total} cards</Text>
      </View>
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Colors.noticeBackground,
    borderRadius: 5,
    margin: 10,
    shadowRadius: 2,
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 1,
      width: 0
    },
  },
  deckContainer: {
    alignItems: 'center',
  },
  header: {
    color: Colors.textPrimary,
    fontSize: 30,
  },
  body: {
    color: Colors.textSecondary,
    fontSize: 20,
  }
})

export default Deck;
