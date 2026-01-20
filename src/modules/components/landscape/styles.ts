import {StyleSheet, Dimensions, Platform} from 'react-native';

const textFont = 'Roboto';

export const styles = StyleSheet.create({
  logoutButton: {
    width: '45%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#212121',
    position: 'absolute',
    bottom: 10,
    left: '5%',
  },
  buttonText: {
    fontFamily: textFont,
    fontSize: 19,
    fontWeight: 'bold',
    color: '#fff',
  },
  libraryCardContainer: {
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    zIndex: 0
  },
  rotatedContainer: {
    transform: [{rotate: '90deg'}],
    height: Dimensions.get('window').width * 0.99,
    width: Dimensions.get('window').height * 0.9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  libraryNameContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  libraryName: {
    fontFamily: textFont,
    fontSize: 24,
    paddingBottom: 5,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  libraryCard: {
    marginBottom: '20%',
  },
  libraryCardDescription: {
    fontFamily: textFont,
    fontSize: 21,
    width: '60%',
    position: 'absolute',
    paddingLeft: 45,
    padding: 35,
    top: '45%',
  },
  imageContainer: {
    position: 'absolute',
    ...Platform.select({
      ios: {
        left:
          Dimensions.get('window').width > 400
            ? Dimensions.get('window').height * 0.26
            : Dimensions.get('window').height * 0.24,
      },
      android: {
        left:
          Dimensions.get('window').width > 410
            ? Dimensions.get('window').height * 0.2
            : Dimensions.get('window').height * 0.25,
      },
    }),

    top: Dimensions.get('window').height * 0.55,
    height: '30%',
    width: Dimensions.get('window').width > 400 ? '35%' : '30%',
    zIndex: -1,
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
