import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [goals, setGoals] = useState([]);

  const addGoal = () => {
    setGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: enteredGoal }]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text>{item.value}</Text>
    </View>
  );

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder="Course Goal" style={styles.input} value={enteredGoal} onChangeText={setEnteredGoal} />
        <Button title="ADD" onPress={addGoal}></Button>
      </View>
      <FlatList data={goals} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});
