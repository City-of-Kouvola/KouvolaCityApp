import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, TouchableOpacity } from 'react-native';
import { ArticleTitle } from './components/ArticleTitle';
import { styles } from './styles';
import { fetchNews } from './RequestService';
import { NewsArticle } from './Types';

const translationData = require('config/locales.json');
const url =
  'https://www.kouvola.fi/wp-json/wp/v2/posts?categories=17&per_page=12';

export const NewsContainer = ({ navigation }: any) => {
  const [newsList, setNewsList] = useState<NewsArticle[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const requestData = async () => {
    setIsLoading(true);
    const newPageToLoad = currentPage + 1;
    const [data, err] = await fetchNews(url, newPageToLoad);

    if (err) {
      setErrorMessage(
        translationData.Labels.finnish.ErrorMessages.ErrorLoadingNews,
      );
      setIsLoading(false);
    }

    setCurrentPage(currentPage + 1);
    setNewsList([...newsList, ...data]);
    setIsLoading(false);
  };

  useEffect(() => {
    requestData();
  }, []);

  const renderNewsArticles = newsList.map(article => (
    <ArticleTitle key={article.id} {...{ article, navigation }} />
  ));

  return (
    <View style={styles.newsContainer}>
      <Text style={styles.headerText}>
        {translationData.Labels.finnish.Screens.Home.CurrentNews}
      </Text>
      {renderNewsArticles}
      {isLoading ? (
        <ActivityIndicator
          style={styles.loaderStyle}
          size='large'
          color='gray'
        />
      ) : (
        <>
          {errorMessage !== '' && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorMessage}>{errorMessage}</Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.fetchMoreButton}
            onPress={requestData}>
            <Text style={styles.buttonText}>
              {translationData.Labels.finnish.Screens.Home.LoadMore}
            </Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
