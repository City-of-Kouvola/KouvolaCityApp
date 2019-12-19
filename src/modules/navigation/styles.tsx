import { StyleSheet } from 'react-native';
import colors from 'config/colors';

export default StyleSheet.create({
  headerMenu: {
    backgroundColor: colors.min,
    height: '100%',
    // fontFamily: 'FuturaPT-Book',
  },
  headerItems: {
    // fontFamily: 'FuturaPT-Book',
    color: colors.max,
    fontWeight: 'bold',
    fontSize: 20,
  },
  header: {
    backgroundColor: colors.min,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  headerLogo: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    padding: 10,
  },
});
