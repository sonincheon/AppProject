import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Platform} from 'react-native';

const CustomButton = ({title, onPress, color}) => {
  const buttonStyles =
    Platform.OS === 'ios' ? styles.iosButton : styles.androidButton;

  return (
    <TouchableOpacity
      style={[buttonStyles, {backgroundColor: color}]}
      onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iosButton: {
    borderRadius: 16,
    padding: 12,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  androidButton: {
    borderRadius: 16,
    padding: 10,
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default CustomButton;