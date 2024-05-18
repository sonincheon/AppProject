import React from 'react';
import {Text, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';

const categories = [
  {
    name: 'all',
    text: '전체보기',
  },
  {
    name: 'business',
    text: '비즈니스',
  },
  {
    name: 'entertainment',
    text: '엔터테인먼트',
  },
  {
    name: 'health',
    text: '건강',
  },
  {
    name: 'sport',
    text: '스포츠',
  },
  {
    name: 'technology',
    text: '기술',
  },
];

const Categories = ({onSelect, category}) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={styles.categoriesContainer}
      showsHorizontalScrollIndicator={false}> 
      {categories.map(c => (
        <TouchableOpacity
          key={c.name}
          style={[
            styles.category,
            category === c.name && styles.activeCategory,
          ]}
          onPress={() => onSelect(c.name)}>
          <Text
            style={[
              styles.categoryText,
              category === c.name && styles.activeCategoryText,
            ]}>
            {c.text}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    padding: 16,
    flexDirection: 'row',
  },
  category: {
    marginRight: 5,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    height: 37,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryText: {
    fontSize: 12,
    color: '#333',
  },
  activeCategory: {
    borderColor: '#22bbcf',
    backgroundColor: '#22bbcf',
  },
  activeCategoryText: {
    color: '#fff',
  },
});

export default Categories;