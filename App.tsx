import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import News from './components/News';
import NameCard from './components/NameCard';
import Counter from './components/Counter';
const App = () => {
  return (
    <View style={styles.container}>
      <Counter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'green',
  },
  error: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'red',
  },
});

export default App;
