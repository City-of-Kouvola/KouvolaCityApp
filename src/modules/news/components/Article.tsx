import React from 'react';
import { Text, View } from 'react-native';

interface IProps {
  article: any;
}

export const Article = (props: IProps) => {
  return (
    <View style={{ flex: 1 }}>
      <Text>{props.article.title.rendered}</Text>
    </View>
  );
};
