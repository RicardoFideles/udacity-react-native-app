import React from 'react';
import { View, Text } from 'react-native';

const ScoreDeck = ({ correct, incorrect }) => {
  return (
    <View>
      <Text>Quiz End!</Text>
      <Text>You got {correct} correct answers and</Text>
      <Text>{incorrect} incorrect answers</Text>
    </View>
  );
};

export default ScoreDeck;
