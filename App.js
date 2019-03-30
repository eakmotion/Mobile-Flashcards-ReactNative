import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middleware';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Deck from './components/Deck'
import DeckDetail from './components/DeckDetail'
import Quiz from './components/Quiz'
import QuizResult from './components/QuizResult'

const store = createStore(reducer, middleware);

const MainNavigator = createStackNavigator({
  Home: {
    screen: AppNavigator,
    navigationOptions: {
      header: null,
    }
  },
  Deck: {
    screen: Deck,
  },
  DeckDetail: {
    screen: DeckDetail
  },
  Quiz: {
    screen: Quiz
  },
  QuizResult: {
    screen: QuizResult
  }
})

const StackContainer = createAppContainer(MainNavigator);

export default class App extends React.Component {
  state = {
    isLoadingComplete : false
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <Provider store={store}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle='default' />}
            <StackContainer />
          </View>
        </Provider>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono' : require('./assets/fonts/SpaceMono-Regular.ttf')
      })
    ]);
  };

  _handleLoadingError = (error) => {
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container : {
    flex            : 1,
    backgroundColor : '#fff'
  }
});
