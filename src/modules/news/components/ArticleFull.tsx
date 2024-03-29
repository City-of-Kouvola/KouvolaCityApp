import React from 'react';
import { ScrollView, useWindowDimensions } from 'react-native';
import HTML from 'react-native-render-html';

import { fullArticleTagStyles } from './htmlStyles';
import { NewsArticle } from '../Types';

interface IProps {
  route: any;
}

export const ArticleFull = ({ route }: IProps) => {
  const fullArticle = route.params.article;
  const htmlContent = `
  <div>
  <h1>${fullArticle.title.rendered}</h1>
  ${fullArticle.content.rendered}
  <a class="articleLink" href="${fullArticle.link}">${fullArticle.link}</a>
  </div>`;

  return (
    <ScrollView>
      <HTML
        tagsStyles={fullArticleTagStyles}
        source={{ html: htmlContent }}
        contentWidth={useWindowDimensions().width}
      />
    </ScrollView>
  );
};
