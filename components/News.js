import React, {useState, useCallback} from 'react';
import {View, StyleSheet} from 'react-native';
import NewsList from './NewsList';
import Categories from './Category';

const News = () => {
  const [category, setCategory] = useState('all');

  const onSelect = useCallback(selectedCategory => {
    setCategory(selectedCategory);
  }, []);

  return (
    <View style={styles.container}>
      <Categories category={category} onSelect={onSelect} />
      <NewsList category={category} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default News;