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
    fontSize: 28,
    textAlign: 'center',
    fontWeight: Platform.OS === 'ios' ? 'bold' : 'normal',
  },
  loaderStyle: {
    marginTop: 30,
  },
  errorContainer: {
    margin: 15,
  },
  errorMessage: {
    fontFamily: textFont,
    fontSize: 18,
    color: '#a75042',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  newsListContainer: { flexGrow: 0 },
  releaseDate: { fontFamily: textFont, fontSize: 14, color: '#6d6d6d' },
  articleTitle: {
    fontFamily: textFont,
    fontSize: 24,
    fontWeight: 'bold',
  },
  newsTitleContainer: {
    borderBottomColor: 'lightgray',
    borderBottomWidth: 2,
    padding: 16,
    marginTop: 6,
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  fetchMoreButton: {
    width: 250,
    padding: 15,
    alignSelf: 'center',
    borderRadius: 10,
    alignItems: 'center',
    backgroundColor: '#212121',
    marginTop: 25,
  },
});
