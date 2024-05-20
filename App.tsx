import React, { useEffect, useState } from 'react';
import {View, Text, StyleSheet, Button, SafeAreaView, KeyboardAvoidingView} from 'react-native';
// import News from './components/News';
// import NameCard from './components/NameCard';
// import Counter from './components/Counter';
import DateHead from './components/Header';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AddTodo from './components/AddTodo';
import Empty from './components/Empty';
import TodoList from './components/TodoList';
import AsyncStorage from '@react-native-community/async-storage';
const App = () => {
  const today = new Date();

  const [todos, setTodos] = useState([
    {id: 1, text: '작업환경 설정', done: true},
    {id: 2, text: '리액트 네이티브 기초 공부', done: false},
    {id: 3, text: '투두 리스트 만들기', done: false},
  ]);

  // 불러오기
  useEffect(() => {
    const load = async () => {
      console.log('load');
      try {
        const data = await AsyncStorage.getItem('todos');
        if (data !== null) {
          setTodos(JSON.parse(data));
        }
      } catch (e) {
        console.log('Failed to load the data from the storage');
      }
    };
    load();
  }, []);

  useEffect(() => {
    const save = async () => {
      console.log('save');
      try {
        await AsyncStorage.setItem('todos', JSON.stringify(todos));
      } catch (e) {
        console.log('Failed to save the data to the storage');
      }
    };
    save();
  }, [todos]);


  const onInsert = text => {
    // 새로 등록될 항목의 id를 생성합니다.
    // 현재 todos 배열에 가장 큰 id를 가져온 후 +1 합니다.
    // 만약 todos 배열이 비어있다면 1을 사용합니다.
    const nextId = todos.length
      ? Math.max(...todos.map(todo => todo.id)) + 1
      : 1;
    // 새로운 항목을 만듭니다.
    const todo = {id: nextId, text, done: false};
    // todos 배열에 새 항목을 추가합니다.
    setTodos(todos.concat(todo));
  };

  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined} // 키보드가 열릴 때 뷰를 조정하는 속성
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? <Empty /> : <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  avoid: {
    flex: 1,
  },
    block: {
      flex: 1,
      backgroundColor:'white'
    },

});

export default App;
