import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  FlatList,
  ListRenderItem,
} from 'react-native';
import { ArticleTitle } from './components/ArticleTitle';
import { styles } from './styles';
import { fetchNews } from './RequestService';
import { NewsArticle } from './Types';
import { testObjectList } from './testobject';

const translationData = require('config/locales.json');
const url = 'https://www.kouvola.fi/wp-json/wp/v2/posts?categories=17';

export const NewsContainer = ({ navigation }: any) => {
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
    console.log(navigation);
    requestData();
  }, []);

  const renderNewsArticles: ListRenderItem<NewsArticle> = ({ item }) => {
    return <ArticleTitle key={item.id} article={item} {...{ navigation }} />;
  };

  return (
    <View style={styles.newsContainer}>
      <Text style={styles.headerText}>
        {translationData.Labels.finnish.Screens.Home.CurrentNews}
      </Text>
      <Text>{errorMessage}</Text>
      <FlatList
        data={newsList}
        renderItem={renderNewsArticles}
        extraData={(item: any) => item.id}
      />
      {isLoading && <ActivityIndicator size='large' />}
    </View>
  );
};
