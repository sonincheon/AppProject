import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Linking,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  const openArticle = () => {
    if (url) {
      Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity onPress={openArticle}>
      <View style={styles.newsItem}>
        {urlToImage && (
          <View style={styles.thumbnail}>
            <Image source={{ uri: urlToImage }} style={styles.image} />
          </View>
        )}
        <View style={styles.contents}>
          <Text style={styles.title}>{title}</Text>
          <Text numberOfLines={3} ellipsizeMode='tail' style={styles.description}>{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  newsItem: {
    flexDirection: 'row',
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbnail: {
    marginRight: 10,
  },
  image: {
    width: width * 0.4, // 화면 크기에 맞게 조정
    height: width * 0.25,
    resizeMode: 'cover',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  contents: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#555',
  },
});

export default NewsItem;
