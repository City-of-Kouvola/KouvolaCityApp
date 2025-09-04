import {StyleSheet} from 'react-native';

const textFont = 'Roboto';

export const styles = StyleSheet.create({
  logoutContainer: {
    justifyContent: "center", 
    alignItems: "center", 
    flex: 2
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
  libraryNameContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  libraryName: {
    fontFamily: textFont,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  imageContainer: {
    alignItems: "center", 
    flex: 1.5
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
