import React, { Component } from 'react';
import { Text, View } from 'react-native';
import DeckDetail from '../components/DeckDetail';

class Deck extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.navTitle,
    };
  };

  addCard = item => {
    this.props.navigation.navigate('DeckToCard', {
      key: item.title,
      navTitle: item.title,
    });
  };

  quizTime = item => {
    this.props.navigation.navigate('Quiz', {
      deck: item,
      navTitle: item.title,
    });
  };

  render() {
    const { key } = this.props.navigation.state.params;
    return (
      <DeckDetail index={key} addCard={this.addCard} quizTime={this.quizTime} />
    );
  }
}

export default Deck;
