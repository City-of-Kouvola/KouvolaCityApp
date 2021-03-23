import { StyleSheet, Platform } from 'react-native';
import colors from 'config/colors';

export default StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    ...Platform.select({
      android: {
        paddingTop: 0,
        height: 70,
      },
      ios: {
        height: 100,
        padding: '2%',
      },
    }),
  },
  drawerHeader: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.black,
    ...Platform.select({
      android: {
        paddingTop: 0,
        height: 70,
      },
      ios: {
        height: 90,
      },
    }),
  },
  headerMenu: {
    backgroundColor: colors.black,
    height: '100%',
  },
  headerLabel: {
    color: colors.white,
    fontWeight: '300',
    fontSize: 22,
    width: '100%',
  },
  headerActiveLabel: {
    ...Platform.select({
      android: {
        fontWeight: 'bold',
      },
      ios: {
        fontWeight: '800',
      },
    }),
  },
  headerItem: {
    borderBottomWidth: 1,
    borderBottomColor: colors.white,
    width: '90%',
    alignSelf: 'center',
  },
  headerLogo: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    padding: 10,
    fontSize: 30,
  },
  webViewView: {
    flex: 1,
  },
});
