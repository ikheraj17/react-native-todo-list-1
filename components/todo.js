import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Todo = ({ todo }) => (
    <Text style={styles.todo}>{todo.text}</Text>
)

const styles = StyleSheet.create({
    todo: {
        fontStyle: 'italic',
        fontWeight: '500',
        margin: 10,
        backgroundColor: 'aqua',
        borderRadius: 15,
        padding: 10,
    }
  });

export default Todo;