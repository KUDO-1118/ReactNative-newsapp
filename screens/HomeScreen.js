import { useEffect, useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { ListItem } from '../components/ListItem';
import axios from 'axios';
import Constants from 'expo-constants';

const URL = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=${Constants.expoConfig.extra.newsApiKey}`


export const HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);

  const fetchArticles = async() => {
    try {
      const response = await axios.get(URL);
      console.log(response.status, response.data);
      setArticles(response.data.articles);
    }catch(error){
      console.error(error);
    }
  }

  useEffect(() => {
    fetchArticles()
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate("Article", {article: item})}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee'
  },
  itemContainer: {
    height: 100,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row",
    marginVertical: 5,
  },
  leftContainer: {
    width: 100
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: "gray"
  }

});
