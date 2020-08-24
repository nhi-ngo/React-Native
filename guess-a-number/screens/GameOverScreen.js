import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const GameOverScreen = ({ userNumber, roundsNumber, onRestartGame }) => (
  <View style={styles.screen}>
    <Text>The Game is Over!</Text>
    <Text>Number of rounds: {roundsNumber} </Text>
    <Text>Input number was: {userNumber}</Text>
    <Button title="NEW GAME" onPress={onRestartGame} />
  </View>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GameOverScreen;
