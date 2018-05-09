import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import DeckList from '../components/DeckList';
import { fetchDecks } from '../actions/decks';

class Home extends Component {
  componentDidMount() {
    this.props.fetchDecks();
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: `Udaci Decks`,
    };
  };

  navigateToDeck = item => {
    this.props.navigation.navigate('Deck', {
      key: item.title,
      navTitle: item.title,
    });
  };

  render() {
    const decks = this.props.decks;
    return (
      <View>
        <DeckList decks={decks} onPress={this.navigateToDeck} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return { decks: state.decks.decks };
};

export default connect(mapStateToProps, { fetchDecks })(Home);
