import React from 'react';
import { Text } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { lightBlue } from '../utils/colors';

const DeckListItem = ({ item, onPress }) => {
  return (
    <Card title={item.title}>
      <Text style={{ marginBottom: 10, textAlign: 'center' }}>
        {item.questions.length} {item.questions.length > 0 ? 'cards' : 'card'}
      </Text>
      <Button
        backgroundColor={lightBlue}
        onPress={onPress}
        title="Let's Play"
      />
    </Card>
  );
};

export default DeckListItem;
