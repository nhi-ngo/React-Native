import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoal = title => {
    setGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: title,
      },
    ]);
  };

  const renderItem = ({ item }) => <GoalItem onDelete={() => console.log('Working?')} title={item.value} />;

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoal} />
      <FlatList data={goals} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
