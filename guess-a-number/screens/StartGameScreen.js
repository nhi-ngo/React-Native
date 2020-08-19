import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const StartGameScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Start a New Game!</Text>
    <View style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <TextInput style={styles.textInput}></TextInput>
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={() => {}}></Button>
        <Button title="Confirm" onPress={() => {}}></Button>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
    paddingVertical: 15,
  },
  textInput: {
    width: 70,
    marginTop: 10,
    padding: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: 'white',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
});

export default StartGameScreen;
