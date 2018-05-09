import React from 'react';
import { Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import Home from '../views/Home';
import Quiz from '../views/Quiz';
import Deck from '../views/Deck';
import DeckToCard from '../views/DeckToCard';
import NewDeck from '../views/NewDeck';
import { lightBlue, white } from '../utils/colors';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export const Tabs = TabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({ tintColor }) => (
          <Ionicons name="ios-home" size={30} color={tintColor} />
        ),
      },
    },
    NewDeck: {
      screen: NewDeck,
      navigationOptions: {
        tabBarLabel: 'Add Deck',
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="plus-square" size={30} color={tintColor} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? lightBlue : white,
      style: {
        height: 56,
        backgroundColor: Platform.OS === 'ios' ? white : lightBlue,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 6,
        shadowOpacity: 1,
      },
    },
  }
);

export const MainNavigator = StackNavigator({
  Home: {
    screen: Tabs,
    navigationOptions: {
      title: 'Flashcards',
      headerTintColor: white,
      headerStyle: {
        backgroundColor: lightBlue,
      },
    },
  },
  Deck: {
    screen: Deck,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: lightBlue,
      },
    },
  },
  DeckToCard: {
    screen: DeckToCard,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: lightBlue,
      },
    },
  },
  Quiz: {
    screen: Quiz,
    navigationOptions: {
      headerTintColor: white,
      headerStyle: {
        backgroundColor: lightBlue,
      },
    },
  },
});
