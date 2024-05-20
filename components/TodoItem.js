import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Alert} from 'react-native';

function TodoItem({id, text, done, onToggle, onRemove}) {
  const remove = () => {
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠습니까?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {text: '삭제', onPress: () => onRemove(id), style: 'destructive'},
      ],
      {
        cancelable: true, // 모달 외부 터치하여 모달 취소 가능
        onDismiss: () => {}, // 모달이 닫힐 때 콜백 함수 지정
      },
    );
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image
              source={require('../assets/icons/check_white/check_white.png')}
            />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrouch]}>{text}</Text>
      <Text style={styles.red} >삭제</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#e0e0e0',
    padding: 16,
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#26a69a',
    marginRight: 16,
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#26a69a',
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  red: {
    color:'red'
  },
  lineThrouch: {
    textDecorationLine: 'line-through',
    color: '#9e9e9e',
  },
  removePlaceholder: {
    width: 32,
    height: 32,
  },
});
export default TodoItem;