import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export default class AddDeckScreen extends Component {
  static navigationOptions = {
    title: 'Add Deck'
  }

  render () {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.getStartedContainer}>
            <Text style={styles.getStartedText}>
              Add Deck
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor : '#fff'
  },
  contentContainer : {
    paddingTop: 30
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96, 100, 109, 1)',
    lineHeight: 24,
    textAlign: 'center'
  }
})
