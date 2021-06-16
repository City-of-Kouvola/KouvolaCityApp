import React from 'react';
import { Text, View } from 'react-native';
import { NewsArticle } from '../Types';

interface IProps {
  navigation: any;
}

export const ArticleFull = ({ navigation }: IProps) => {
  console.log(navigation);
  const fullArticle: NewsArticle = navigation.state.params
    .article as NewsArticle;

  return (
    <View>
      <Text>{fullArticle.title.rendered}</Text>
      <Text>{fullArticle.content.rendered}</Text>
    </View>
  );
};
