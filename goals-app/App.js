import React from 'react';
import { StyleSheet, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Course Goal" style={styles.inputContainer} />
      <Button title="ADD"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputContainer: {
    color: '#20232a',
    fontSize: 30,
  },
});
