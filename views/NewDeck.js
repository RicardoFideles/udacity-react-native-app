import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {
  Card,
  Button,
  FormInput,
  FormValidationMessage,
} from 'react-native-elements';
import { connect } from 'react-redux';

import { newDeck } from '../actions/decks';

import { lightBlue, white } from '../utils/colors';

class NewDeck extends Component {
  state = {
    title: '',
    msg: '',
  };

  saveDeck = () => {
    let { title } = this.state;
    if (title) {
      const deck = this.createDeck(title);

      this.navigateToDeck(deck);

      this.dispatchDeck(deck);

      this.removeError();
    } else {
      this.addError();
    }
  };

  dispatchDeck(deck) {
    this.props.dispatch(newDeck(deck));
  }

  createDeck(title) {
    return {
      title: title,
      questions: [],
    };
  }

  navigateToDeck = item => {
    this.props.navigation.navigate('Deck', {
      key: item.title,
      navTitle: item.title,
    });
  };

  removeError() {
    this.setState({
      msg: '',
    });
  }

  addError() {
    this.setState({
      msg: 'Please inform the Title.',
    });
  }

  render() {
    let { msg } = this.state;

    return (
      <Card style={styles.container}>
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>
          What is the title of your new deck?
        </Text>
        <FormInput
          onChangeText={title => this.setState({ title })}
          value={this.state.title}
        />
        <FormValidationMessage>{msg}</FormValidationMessage>
        <Button
          backgroundColor={lightBlue}
          onPress={this.saveDeck}
          title="Save"
        />
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect(null)(NewDeck);
