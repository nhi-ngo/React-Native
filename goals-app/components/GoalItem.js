import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GoalItem = ({ title }) => (
  <View style={styles.listItem}>
    <Text>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    margin: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1,
  },
});

export default GoalItem;
