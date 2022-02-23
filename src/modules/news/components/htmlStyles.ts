import { MixedStyleDeclaration } from 'react-native-render-html';

const textFont = 'Roboto';

export const titleTagStyles: Readonly<Record<string, MixedStyleDeclaration>> = {
  h1: {
    fontFamily: textFont,
    fontSize: 24,
    fontWeight: '500',

    marginBottom: 16,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: '#008629',
  },
  p: {
    fontSize: 18,
    color: '#212121',
    fontFamily: textFont,
    marginBottom: 20,
  },
};

export const fullArticleTagStyles: Readonly<
  Record<string, MixedStyleDeclaration>
> = {
  div: { fontFamily: textFont, padding: 15 },
  h1: { fontSize: 41, marginBottom: 32, color: '#212121', fontWeight: '500' },
  h2: { fontSize: 35, marginBottom: 16, color: '#212121', fontWeight: '500' },
  h3: { fontSize: 35, color: '#212121', fontWeight: '500' },
  p: {
    fontSize: 18,
    marginBottom: '5%',
    color: '#212121',
    lineHeight: 18 * 1.5,
  },
  a: { fontSize: 18, marginBottom: '5%', color: '#008629' },
  figure: { marginBottom: 18 },
  figcaption: { fontSize: 16, color: '#555d66' },
};
