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
    const textArr = [];
    for(var i = 0; i < todos.length; i ++) {
      textArr.push(todos[i].text);
    }
    if(textArr.includes(text)) return(alert("Todo exists!"));
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
    <View style={{backgroundColor: 'black', flex: 1}}>
    <View style={{backgroundColor: 'black', justifyContent: 'center', margin: 2,}}>
      <Text style={styles.title}>REACT NATIVE TODO LIST</Text>
      <TextInput 
        style={{height: 40, backgroundColor: 'white', margin: 30}}
        value={text}
        onSubmitEditing={handleSubmit}
        onChangeText={text => setText(text)}
        placeholder={"Add a todo item here"}
        />
      {todos.map((todo, index) => (
        <Todo index={index} key={index} todo={todo}/>
      ))}
    </View>
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
