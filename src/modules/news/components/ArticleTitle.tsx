import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import HTML from 'react-native-render-html';
import { styles } from '../styles';
import { NewsArticle } from '../Types';
import { titleTagStyles } from './htmlStyles';

interface IProps {
  article: NewsArticle;
  navigation: any;
}

export const ArticleTitle = ({ article, navigation }: IProps) => {
  const htmlContent = `
  <h1>${article.title.rendered}</h1>
  ${article.excerpt.rendered}`;

  const formatReleaseDate = () => {
    const dateObj = new Date(article.date);
    const releaseDate = `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}`;
    return releaseDate;
  };

  const openDetailedView = () => {
    navigation.navigate('Details', { article });
  };

  return (
    <TouchableOpacity onPress={() => openDetailedView()}>
      <View style={styles.newsTitleContainer}>
        <Text style={styles.releaseDate}>{formatReleaseDate()}</Text>

        <HTML tagsStyles={titleTagStyles} source={{ html: htmlContent }} />
      </View>
    </TouchableOpacity>
  );
};
