import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { Card, Button } from 'react-native-elements';
import { lightBlue, white } from '../utils/colors';
import { fetchDecks } from '../actions/decks';

const DeckDetail = ({ index, decks, addCard, quizTime }) => {
  let deck = decks.find(d => d.title === index);

  if (deck) {
    return (
      <View style={styles.container}>
        <Card style={styles.cardContainer} title={deck.title}>
          <Text style={{ marginBottom: 10, textAlign: 'center' }}>
            {deck.questions.length} cards
          </Text>
        </Card>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => addCard(deck)}
            style={styles.button}
            backgroundColor={lightBlue}
            title="Add Card"
          />
          <Button
            onPress={() => quizTime(deck)}
            style={styles.button}
            backgroundColor={lightBlue}
            title="Start Quiz"
          />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    marginTop: 100,
  },
  button: {
    marginTop: 10,
  },
});

const mapStateToProps = state => {
  return { decks: state.decks.decks };
};

export default connect(mapStateToProps, { fetchDecks })(DeckDetail);
