import {StyleSheet} from 'react-native';

const textFont = 'Roboto';

export const styles = StyleSheet.create({
  logoutContainer: {
    justifyContent: "center", 
    alignItems: "center", 
    flex: 1
  },
  logoutButton: {
    height: 50,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#212121',
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  libraryCardContainer: {
    height: '100%',
    flex: 1
  },
  libraryCard: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center"
  },
  libraryCardDescription: {
    fontFamily: textFont,
    fontSize: 21,
    padding: 15,
  },
  imageContainer: {
    alignItems: "center", 
    flex: 1
  },
  libraryCardImage: {
    maxWidth: '100%',
    maxHeight: '100%',
    transform: [{rotate: '90deg'}],
  },
  holderName: {
    textAlign: 'center',
    fontSize: 18,
  },
});
