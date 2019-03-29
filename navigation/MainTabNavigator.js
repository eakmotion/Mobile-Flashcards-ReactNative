import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TabBarIcon from '../components/TabBarIcon';

import HomeScreen from '../screens/HomeScreen';
import AddDeckScreen from '../screens/AddDeckScreen';

const HomeStack = createStackNavigator({
  Home : HomeScreen
});

const AddDeckStack = createStackNavigator({
  AddDeck : AddDeckScreen
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
