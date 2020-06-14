import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Todo = ({ todo, fin }) => (
    <View style={styles.container}>
        
          <Text onPress={() => fin(todo)} style={styles.todo}>{todo.text}</Text>
    </View>
    
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: 'black',
        padding: 7,
    },
    todo: {
        fontStyle: 'italic',
        fontWeight: '500',
        margin: 5,
        backgroundColor: 'aqua',
        borderRadius: 15,
        padding: 10,
    },
  });

export default Todo;