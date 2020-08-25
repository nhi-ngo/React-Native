import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

const fetchFonts = () =>
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

export default function App() {
  const [userInput, setUserInput] = useState();
  const [guessRounds, setGuessRounds] = useState(0);
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={err => console.log(err)}
      />
    );
  }

  const onRestartGame = () => {
    setGuessRounds(0);
    setUserInput(null);
  };

  const onStartGame = selectedNumber => {
    setUserInput(selectedNumber);
  };

  const onGameOver = numOfRounds => {
    setGuessRounds(numOfRounds);
  };

  let content = <StartGameScreen onStartGame={onStartGame} />;

  if (userInput && guessRounds <= 0) {
    content = <GameScreen userInput={userInput} onGameOver={onGameOver} />;
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen
        userNumber={userInput}
        roundsNumber={guessRounds}
        onRestartGame={onRestartGame}
      />
    );
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
