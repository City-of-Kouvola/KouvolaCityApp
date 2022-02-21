import { Platform, StyleProp, StyleSheet, ViewStyle } from 'react-native';

import colors from 'config/colors';
import Sizing from 'config/layout/sizing';
import TextSize from 'config/layout/text';

export default StyleSheet.create({
  header: {
    backgroundColor: colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#212121',
    ...Platform.select({
      android: {
        height: Sizing.XXML * 1.1,
      },
      ios: {
        height: Sizing.XXML * 1.1,
        padding: 0,
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
        height: Sizing.XXML * 1.1,
      },
      ios: {
        height: Sizing.XXML * 1.1,
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
    fontSize: TextSize.S,
    width: '100%',
    padding: 20,
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
  headerLogo: {
    width: '100%',
    height: '100%',
  },
  iconStyle: {
    padding: Sizing.S,
    fontSize: 30,
  },
  webViewView: {
    flex: 1,
  },
  divider: {
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
});
