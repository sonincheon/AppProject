import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos,onToggle,onRemove}) {
  return (
    <FlatList // FlatList 컴포넌트를 사용하면 스크롤이 가능한 리스트를 만들 수 있습니다.
      ItemSeparatorComponent={() => <View style={styles.separator} />} // 각 아이템을 구분할 구분선을 지정합니다.
      style={styles.list} // 리스트의 스타일을 지정합니다.
      data={todos} // 리스트에 표시할 데이터를 지정합니다.
      // renderItem은 각 데이터를 렌더링할 컴포넌트를 지정합니다.
      renderItem={({item}) => (
        <TodoItem id={item.id} text={item.text} done={item.done} onToggle={onToggle} onRemove={onRemove}/>
      )}
      // keyExtractor는 각 데이터를 식별하는 키를 지정합니다.
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
  },
});

export default TodoList;