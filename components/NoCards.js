import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { lightBlue } from '../utils/colors';
import { Button } from 'react-native-elements';
const NoCards = ({ backToDeck }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Before start the Quiz, please add some cards
      </Text>
      <Button
        style={styles.button}
        onPress={() => backToDeck()}
        backgroundColor={lightBlue}
        title="Back to Deck"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  text: {
    paddingTop: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    paddingTop: 50,
  },
});

export default NoCards;
