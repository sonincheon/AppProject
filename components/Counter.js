import React, { useState } from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const Counter = () =>{
  const [number, setNumber] = useState(0);
  const onIncrease = () => {
    setNumber(number + 1);
  };
  const onDecrease = () => {
    setNumber(number - 1);
  };
  return (
    <View style={styles.wrapper}>
      <View style={styles.numberArea}>
        <Text style={styles.number}>{number}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'royalblue'}]}
          onPress={onIncrease}>
          <Text style={styles.text}>+1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'orangered'}]}
          onPress={onDecrease}>
          <Text style={styles.text}>-1</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  numberArea: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 72,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 16,
    padding: 10,
    width: 120,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontSize: 24,
  },
});

export default Counter;