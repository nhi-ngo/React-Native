import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randomNum = Math.floor(Math.random() * (max - min)) + min;

  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  }
  return randomNum;
};

const GameScreen = ({ userInput, onGameOver }) => {
  const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userInput));
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userInput) {
      onGameOver(rounds);
    }
  }, [currentGuess, userInput, onGameOver]);

  const onNextGuess = direction => {
    if ((direction === 'lower' && currentGuess < userInput) || (direction === 'greater' && currentGuess > userInput)) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [{ text: 'Sorry!', style: 'cancel' }]);
    }

    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }

    const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
    setCurrentGuess(nextNumber);
    setRounds(currentRound => currentRound + 1);
  };

  return (
    <View style={styles.screen}>
      <Text>Computer's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <Button title="LOWER" onPress={() => onNextGuess('lower')} />
        <Button title="GREATER" onPress={() => onNextGuess('greater')} />
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: 300,
    maxWidth: '80%',
  },
});

export default GameScreen;
