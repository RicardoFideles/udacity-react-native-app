import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { lightBlue } from '../utils/colors';

const ScoreDeck = ({ correct, incorrect, total, restartQuiz }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz End!</Text>
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>You got {correct} correct answers and</Text>
        <Text style={styles.score}>{incorrect} incorrect answers</Text>
        <Text style={styles.score}>of {total} questions</Text>
      </View>
      <View style={styles.scoreContainer}>
        <Button
          backgroundColor={lightBlue}
          style={styles.button}
          onPress={restartQuiz}
          title="Back to Deck"
        />
        <Button
          backgroundColor={lightBlue}
          onPress={restartQuiz}
          title="Restart Quiz"
          style={styles.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 12,
  },
  scoreContainer: {
    marginTop: 40,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
  },
  score: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});

export default ScoreDeck;
