import React, { useState } from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const onAddGoal = title => {
    if (title.length === 0) {
      return;
    }

    setGoals(currentGoals => [
      ...currentGoals,
      {
        id: Math.random().toString(),
        value: title,
      },
    ]);

    setModalVisible(false);
  };

  const removeGoal = goalId => {
    setGoals(currentGoals => currentGoals.filter(goal => goal.id !== goalId));
  };

  const onButtonCancel = () => {
    setModalVisible(false);
  };

  const renderItem = ({ item }) => <GoalItem id={item.id} onDelete={removeGoal} title={item.value} />;

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={() => setModalVisible(true)} />
      <GoalInput modalVisible={modalVisible} onAddGoal={onAddGoal} onButtonCancel={onButtonCancel} />
      <FlatList data={goals} renderItem={renderItem} keyExtractor={item => item.id}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
