import React, { Component } from 'react';
import { Text, View } from 'react-native';
import QuestionCard from '../components/QuestionCard';
import ScoreDeck from '../components/ScoreDeck';
class Quiz extends Component {
  state = {
    score: 0,
    index: 0,
    lastCard: false,
  };
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Quiz Time',
    };
  };

  setCorrect = () => {
    const { deck } = this.props.navigation.state.params;
    const total = deck.questions.length - 1;
    const { index, score } = this.state;
    console.log('index', index);
    console.log('total', total);
    if (index >= total) {
      this.setState({
        lastCard: true,
      });
    } else {
      this.setState({
        score: score + 1,
        index: index + 1,
      });
    }
  };

  setIncorrect = () => {
    console.log('setIncorrect');
  };

  render() {
    const { index, lastCard } = this.state;

    console.log('lastCard', lastCard);

    if (lastCard) {
      return <ScoreDeck correct={2} incorrect={1} />;
    } else {
      const { deck } = this.props.navigation.state.params;
      const question = deck.questions[index];
      return (
        <View>
          <QuestionCard
            question={question}
            setIncorrect={this.setIncorrect}
            setCorrect={this.setCorrect}
          />
        </View>
      );
    }
  }
}

export default Quiz;
