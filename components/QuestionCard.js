import React, { Component } from 'react';
import {
  Text,
  Animated,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Card, Button } from 'react-native-elements';
import { lightBlue, green, red } from '../utils/colors';
class QuestionCard extends Component {
  state = {
    opacity: new Animated.Value(0),
    showQuestion: true,
  };

  componentDidMount() {
    const { opacity } = this.state;
    Animated.timing(opacity, { toValue: 1, duration: 1000 }).start();
  }

  changCardValue = () => {
    const { showQuestion } = this.state;
    let value = showQuestion ? false : true;
    this.setState({
      showQuestion: value,
    });
  };

  render() {
    const { opacity, showQuestion } = this.state;
    const { question, answer } = this.props.question;
    const { setCorrect, setIncorrect } = this.props;

    return (
      <Card>
        <Animated.Text style={[styles.question, { opacity }]}>
          {showQuestion ? question : answer}
        </Animated.Text>
        <TouchableOpacity onPress={this.changCardValue}>
          <Text style={styles.textAnswer}>Answer</Text>
        </TouchableOpacity>
        <View>
          <Button
            style={styles.button}
            backgroundColor={green}
            onPress={() => setCorrect()}
            title="Correct"
          />
          <Button
            style={styles.button}
            backgroundColor={red}
            onPress={() => setIncorrect()}
            title="Incorrect"
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  textAnswer: {
    color: red,
    textAlign: 'center',
  },
  question: {
    fontSize: 40,
    textAlign: 'center',
  },
  button: {
    marginTop: 10,
  },
});

export default QuestionCard;
