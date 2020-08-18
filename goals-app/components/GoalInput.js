import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = ({ onAddGoal }) => {
  const [enteredGoal, setEnteredGoal] = useState('');

  return (
    <View style={styles.inputContainer}>
      <TextInput placeholder="Course Goal" style={styles.input} value={enteredGoal} onChangeText={setEnteredGoal} />
      <Button title="ADD" onPress={() => onAddGoal(enteredGoal)}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});

export default GoalInput;
