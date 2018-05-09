import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Card, Button } from 'react-native-elements';
import DeckListItem from './DeckListItem';

const DeckList = ({ decks, onPress }) => {
  return (
    <FlatList
      data={decks}
      keyExtractor={item => item.title}
      ItemSeparatorComponent={this.renderSeparator}
      renderItem={({ item }) => (
        <DeckListItem item={item} onPress={() => onPress(item)} />
      )}
    />
  );
};

export default DeckList;
