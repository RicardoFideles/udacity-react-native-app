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
    if (index >= total) {
      this.setState({
        score: score + 1,
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
    const { deck } = this.props.navigation.state.params;
    const total = deck.questions.length - 1;
    const { index } = this.state;
    if (index >= total) {
      this.setState({
        lastCard: true,
      });
    } else {
      this.setState({
        index: index + 1,
      });
    }
  };

  render() {
    const { index, lastCard, score } = this.state;
    const { deck } = this.props.navigation.state.params;

    if (lastCard) {
      const total = deck.questions.length;
      let incorrect = total - score;
      return <ScoreDeck correct={score} incorrect={incorrect} total={total} />;
    } else {
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
