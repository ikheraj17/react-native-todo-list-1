import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Todo = ({ todo }) => (
    <Text style={styles.todo}>{todo.text}</Text>
)

const styles = StyleSheet.create({
    todo: {
        fontStyle: 'italic',
        margin: 10,
    }
  });

export default Todo;