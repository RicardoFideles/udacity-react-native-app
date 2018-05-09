import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';

import {
  Card,
  FormInput,
  FormValidationMessage,
  Button,
} from 'react-native-elements';
import { lightBlue } from '../utils/colors';

import { newQuestion } from '../actions/decks';

class DeckToCard extends Component {
  state = {
    deckQuestion: '',
    deckAnswer: '',
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Add Card',
    };
  };

  saveCard = () => {
    let { deckQuestion, deckAnswer } = this.state;

    if (!deckQuestion) {
      this.addError('Please inform the question first.');
    } else {
      this.removeError();
    }

    if (!deckAnswer) {
      this.addError('Please inform the answer to this question first.');
    } else {
      this.removeError();
    }

    const questionCard = this.createCard(deckQuestion, deckAnswer);

    const { key } = this.props.navigation.state.params;

    this.navigateBackToDeck();

    this.dispatchQuestion(questionCard, key);
  };

  createCard(deckQuestion, deckAnswer) {
    return {
      question: deckQuestion,
      answer: deckAnswer,
    };
  }

  navigateBackToDeck() {
    this.props.navigation.goBack(null);
  }

  dispatchQuestion(questionCard, key) {
    this.props.dispatch(newQuestion(questionCard, key));
  }

  removeError() {
    this.setState({
      msg: '',
    });
  }

  addError(msg) {
    this.setState({
      msg: msg,
    });
  }

  render() {
    const { msg } = this.state;
    return (
      <Card>
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>Question</Text>
        <FormInput
          onChangeText={deckQuestion => this.setState({ deckQuestion })}
          value={this.state.deckQuestion}
        />
        <Text style={{ marginBottom: 10, textAlign: 'center' }}>Answer</Text>
        <FormInput
          onChangeText={deckAnswer => this.setState({ deckAnswer })}
          value={this.state.deckAnswer}
        />
        <FormValidationMessage>{msg}</FormValidationMessage>
        <Button
          backgroundColor={lightBlue}
          onPress={this.saveCard}
          title="Save"
        />
      </Card>
    );
  }
}
export default connect(null)(DeckToCard);
