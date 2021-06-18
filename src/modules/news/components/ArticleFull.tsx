import React from 'react';
import { Text, View, ScrollView, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';
import { SafeAreaView } from 'react-navigation';
import { NewsArticle } from '../Types';
import { fullArticleTagStyles } from './htmlStyles';

interface IProps {
  navigation: any;
}

export const ArticleFull = ({ navigation }: IProps) => {
  const fullArticle: NewsArticle = navigation.state.params.article;
  const htmlContent = `
  <div>
  <h1>${fullArticle.title.rendered}</h1>
  ${fullArticle.content.rendered}
  <a class="articleLink" href="${fullArticle.link}">${fullArticle.link}</a>
  </div>`;

  return (
    <SafeAreaView>
      <ScrollView>
        <HTML
          tagsStyles={fullArticleTagStyles}
          source={{ html: htmlContent }}
          contentWidth={useWindowDimensions().width}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
