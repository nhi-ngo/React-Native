import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
  const [userInput, setUserInput] = useState();
  const [guessRounds, setGuessRounds] = useState(0);

  const onStartGame = selectedNumber => {
    setUserInput(selectedNumber);
    setGuessRounds(0);
  };

  const onGameOver = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (userInput && guessRounds <= 0) {
    content = <GameScreen userInput={userInput} onGameOver={onGameOver} />;
  } else if (guessRounds > 0) {
    content = <GameOverScreen />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Guess a Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
