import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Todo from './components/todo'

export default function App() {

  const [todos, setTodos] = useState([
    { text: "Learn about React Native" },
    { text: "Learn to use Hooks" },
    { text: "Meet Judy for ice cream" }
  ]);

  const [text, setText] = useState("");

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const clearText = () => {
    setText("");
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (!text) return;
    addTodo(text);
    clearText();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>REACT NATIVE TODO LIST APP</Text>
      <TextInput 
        style={{height: 40, backgroundColor: 'white', margin: 30}}
        value={text}
        onSubmitEditing={handleSubmit}
        onChangeText={text => setText(text)}
        placeholder={"Add a todo item here"}
        />
      {todos.map((todo, index) => (
        <Todo style={styles.todo} index={index} key={index} todo={todo}/>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    backgroundColor: 'lightgray',
    borderRadius: 15,
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    padding: 10
  }
});
