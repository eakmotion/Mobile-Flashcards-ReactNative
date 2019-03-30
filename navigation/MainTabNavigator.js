import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import Home from '../components/Home';
import AddDeck from '../components/AddDeck';

const HomeStack = createStackNavigator({
  Home : Home
});

const AddDeckStack = createStackNavigator({
  AddDeck : AddDeck
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Decks',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-albums' : 'md-albums'}
    />
  )
};

AddDeckStack.navigationOptions = {
  tabBarLabel: 'Add Deck',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-add-circle' : 'md-add-circle'}
    />
  )
};

export default createBottomTabNavigator({
  HomeStack,
  AddDeckStack
});
