import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Todo from './components/todo'

export default function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React Native" },
    { text: "Learn to use Hooks" },
    { text: "Meet Judy for ice cream" }
  ]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>REACT NATIVE TODO LIST APP</Text>
      {todos.map((todo, index) => (
        <Todo style={styles.todo} index={index} key={index} todo={todo}/>
      ))}
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
  title: {
    fontWeight: 'bold',
  }
});
