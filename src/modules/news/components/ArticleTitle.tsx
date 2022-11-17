import React from 'react';
import {
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import HTML from 'react-native-render-html';

import { titleTagStyles } from './htmlStyles';
import { styles } from '../styles';
import { NewsArticle } from '../Types';
import { ERouteName } from 'modules/navigation/typings';

interface IProps {
  article: NewsArticle;
  navigation: any;
  isScrolling: boolean;
}

export const ArticleTitle = ({ article, navigation, isScrolling }: IProps) => {
  const htmlContent = `
  <h1>${article.title.rendered}</h1>
  ${article.excerpt.rendered}`;

  const formatReleaseDate = () => {
    const dateObj = new Date(article.date);
    const releaseDate = `${dateObj.getDate()}.${
      dateObj.getMonth() + 1
    }.${dateObj.getFullYear()}`;
    return releaseDate;
  };

  const openDetailedView = () => {
    navigation.navigate(ERouteName.DETAILS, { article });
  };

  return (
    <TouchableOpacity 
      importantForAccessibility={(isScrolling) ? "no-hide-descendants" : "yes"}
      onPress={openDetailedView}>
      <View style={styles.newsTitleContainer}>
        <Text style={styles.releaseDate}>{formatReleaseDate()}</Text>
        <HTML
          contentWidth={useWindowDimensions().width}
          tagsStyles={titleTagStyles}
          source={{ html: htmlContent }}
        />
      </View>
    </TouchableOpacity>
  );
};
