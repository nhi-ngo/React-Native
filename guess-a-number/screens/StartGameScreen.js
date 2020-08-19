import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Card from '../components/Card';
import Input from '../components/Input';
import colors from '../constants/colors';

const StartGameScreen = () => (
  <View style={styles.screen}>
    <Text style={styles.title}>Start a New Game!</Text>
    <Card style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <Input
        style={styles.input}
        blurOnSubmit // only works in Android
        autoCapitalize="none"
        autoCorrect={false}
        keyboardType="number-pad"
        maxLength={2}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" onPress={() => {}} color={colors.lightGreen}></Button>
        </View>
        <View style={styles.button}>
          <Button title="Confirm" onPress={() => {}} color={colors.darkGreen}></Button>
        </View>
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
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingHorizontal: 25,
  },
  button: {
    width: 100,
  },
  input: {
    width: 50,
    textAlign: 'center',
  },
});

export default StartGameScreen;
