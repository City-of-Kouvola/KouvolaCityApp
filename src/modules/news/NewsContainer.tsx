import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Article } from './components/Article';
import { styles } from './styles';
import { fetchNews } from './RequestService';
import { NewsArticle } from './Types';
import { testObjectList } from './testobject';

const translationData = require('config/locales.json');
const url = 'https://www.kouvola.fi/wp-json/wp/v2/posts?categories=17';

export const NewsContainer = () => {
  const [newsList, setNewsList] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const requestData = async () => {
    //const [data, err] = await fetchNews(url);
    const data: NewsArticle[] = testObjectList;
    const err = null;
    if (err) {
      setErrorMessage(
        translationData.Labels.finnish.ErrorMessages.ErrorLoadingNews,
      );
    }
    setNewsList(data);
    console.log(data);
    setIsLoading(false);
  };

  useEffect(() => {
    requestData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.headerText}>
        {translationData.Labels.finnish.Screens.Home.CurrentNews}
      </Text>
      <Text>{errorMessage}</Text>
      {newsList.map(newsArticle => (
        <Article key={newsArticle.id} article={newsArticle} />
      ))}
      {isLoading && <ActivityIndicator size='large' />}
    </View>
  );
};
