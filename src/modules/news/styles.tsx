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
  navBarContainer: {
    alignItems: 'center'
  },
  navBarButton: {
    width: '90%',
    height: 50,
    backgroundColor: '#28482B',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  navBarOpenButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    marginLeft: 10,    
  },
  navBarMenu: {
    width: '100%',
    height: '50%',
  },
  menuIcon: {
    marginHorizontal: 20,
    color: 'white',
    fontSize: 25,
  },
  categoryButton: {
    paddingVertical: 10,
    flexDirection: 'row',
  },
  toggleButton: {
    marginHorizontal: '3%',
    fontSize: 25,
    paddingTop: 2,
    color: '#28482B',
  },
  categoryText: {
    fontSize: 20,
    width: '80%'
  },
  navBarShowMoreButton: {
    alignItems: 'center',
    backgroundColor: '#28482B',
    padding: 10,
  },
  showMoreText: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
  },
  noneSelectedContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
  },
  noneSelectedText: {
    fontSize: 15,    
  },    
  skew: {    
    transform: [{ skewX: '-4deg' }],
  },
});