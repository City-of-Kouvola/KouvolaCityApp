import React from 'react';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { styles } from '../styles';
import { NewsArticle } from '../Types';

interface IProps {
  article: NewsArticle;
  navigation: any;
}

export const ArticleTitle = ({ article, navigation }: IProps) => {
  const openDetailedView = () => {
    navigation.navigate('Details', { article });
  };

  return (
    <View style={styles.newsTitleContainer}>
      <TouchableOpacity onPress={() => openDetailedView()}>
        <Text style={styles.articleTitle}>{article.title.rendered}</Text>
      </TouchableOpacity>
    </View>
  );
};
