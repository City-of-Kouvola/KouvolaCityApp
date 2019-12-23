import { StyleSheet, Platform } from 'react-native';
import colors from 'config/colors';

export default StyleSheet.create({
  headerMenu: {
    backgroundColor: colors.min,
    height: '100%',
  },
  headerLabel: {
    color: colors.max,
    fontWeight: '400',
    fontSize: 20,
    width: '100%',
  },
  headerActiveLabel: {
    fontWeight: 'bold',
  },
  headerItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    width: '90%',
    alignSelf: 'center',
  },
  header: {
    backgroundColor: colors.min,
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
        height: 95,
      },
    }),
  },
  headerLogo: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    padding: 10,
  },
});
