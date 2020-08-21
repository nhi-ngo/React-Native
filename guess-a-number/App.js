import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';

export default function App() {
  const [userGuess, setUserGuess] = useState();

  const onStartGame = selectedNumber => {
    setUserGuess(selectedNumber);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (userGuess) {
    content = <GameScreen userInput={userGuess} />;
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
