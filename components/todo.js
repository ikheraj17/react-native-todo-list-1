import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

const Todo = ({ todo, index, fin, del }) => (
    <ScrollView style={styles.container}>
        
          <Text onLongPress={() => del(index)} onPress={() => fin(index)} style={todo.completed ? styles.complete : styles.todo}>{todo.text}</Text>
    </ScrollView>
    
)

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: 'black',
        padding: 7,
        width: 300,
        height: 20,
    },
    todo: {
        fontStyle: 'italic',
        fontWeight: '500',
        margin: 5,
        marginBottom: 0,
        backgroundColor: 'aqua',
        borderRadius: 15,
        padding: 10,
    },
    complete: {
        fontStyle: 'italic',
        fontWeight: '500',
        margin: 5,
        backgroundColor: 'aqua',
        borderRadius: 15,
        padding: 10,
        textDecorationLine: 'line-through',
    }
  });

export default Todo;