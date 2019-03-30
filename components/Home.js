import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { handleFetchDecks } from '../actions';
import Deck from './Deck';

class Home extends Component {
  static navigationOptions = {
    title : 'All Decks'
  };

  componentDidMount() {
    this.props.dispatch(handleFetchDecks());
  }

  render() {
    const { decks } = this.props;

    return (
      <FlatList
        data={Object.keys(decks)}
        keyExtractor={(item) => decks[item].title}
        renderItem={({ item }) => (
          <Deck
            key={decks[item].title}
            title={decks[item].title}
            total={decks[item].questions.length}
          />
        )}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks : state
  };
};

const styles = StyleSheet.create({
  container           : {
    flex            : 1,
    backgroundColor : '#fff'
  },
  contentContainer    : {
    paddingTop : 30
  },
  getStartedContainer : {
    alignItems       : 'center',
    marginHorizontal : 50
  },
  getStartedText      : {
    fontSize   : 17,
    color      : 'rgba(96, 100, 109, 1)',
    lineHeight : 24,
    textAlign  : 'center'
  }
});

export default connect(mapStateToProps)(Home);
