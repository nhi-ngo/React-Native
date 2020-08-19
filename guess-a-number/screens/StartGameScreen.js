import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';

const StartGameScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Start a New Game!</Text>
    <Card style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <Card style={styles.textInputContainer}>
        <TextInput></TextInput>
      </Card>
      <View style={styles.buttonContainer}>
        <Button title="Reset" onPress={() => {}}></Button>
        <Button title="Confirm" onPress={() => {}}></Button>
      </View>
    </Card>
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
    paddingVertical: 15,
  },
  textInputContainer: {
    width: 100,
    marginTop: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
});

export default StartGameScreen;
