import { StyleSheet } from 'react-native';
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
  },
  headerLogo: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    padding: 10,
  },
});
