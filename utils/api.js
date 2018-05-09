import { AsyncStorage } from 'react-native';
import { MOBILE_FLASH_CARDS_KEY } from '../utils/constants';

export function getDecks() {
  // AsyncStorage.removeItem(MOBILE_FLASH_CARDS_KEY);
  return AsyncStorage.getItem(MOBILE_FLASH_CARDS_KEY);
}

export function addDeck(key, deck) {
  return AsyncStorage.mergeItem(
    MOBILE_FLASH_CARDS_KEY,
    JSON.stringify({
      [key]: deck,
    })
  );
}

export function addNewQuestion(newQuestion, key) {
  return AsyncStorage.getItem(MOBILE_FLASH_CARDS_KEY).then(results => {
    let temp = JSON.parse(results);
    temp[key].questions.push(newQuestion);
    return AsyncStorage.setItem(MOBILE_FLASH_CARDS_KEY, JSON.stringify(temp));
  });
}
