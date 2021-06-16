import { StyleSheet, Platform } from 'react-native';

const HeaderFont =
  Platform.OS === 'ios' ? 'GT Pressura Mono LC' : 'GT-Pressura-Mono-LC-Bold';
const textFont = 'Roboto';

export const styles = StyleSheet.create({
  newsContainer: {
    flex: 1,
  },
  headerText: {
    fontFamily: HeaderFont,
    fontSize: 24,
    textAlign: 'center',
  },
  articleTitle: {
    fontFamily: textFont,
    fontSize: 21,
    fontWeight: 'bold',
  },
  newsTitleContainer: {
    padding: 16,
  },
});
