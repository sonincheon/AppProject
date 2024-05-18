import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator, FlatList} from 'react-native';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsList = ({category}) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = category === 'all' ? 'all' : `category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr&${query}&apiKey=ffbbc82f694941a7b0e2d4f4515abcc7`,
        );
        console.log(response.data.articles);
        setArticles(response.data.articles);
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    fetchData();
  }, [category]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <FlatList
      style={styles.newsList}
      data={articles}
      keyExtractor={item => item.url}
      renderItem={({item}) => <NewsItem key={item.url} article={item} />}
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsList: {
    paddingVertical: 20,
  },
});

export default NewsList;