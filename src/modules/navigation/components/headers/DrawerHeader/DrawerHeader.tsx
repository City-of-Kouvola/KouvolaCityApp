import React from 'react';
import { Header } from 'react-native-elements';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import { generateOnCloseIconPressHandler } from './helpers';
import styles from '../styles';
import colors from 'config/colors';
import Logo from 'components/Logo';
import translationData from 'config/locales.json';

const DrawerHeader = (props: DrawerContentComponentProps): JSX.Element => {
  return (
    <Header
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.black,
      }}
      rightComponent={{
        accessible: true,
        accessibilityLabel:
          translationData.Accessibility.finnish.Navigation.CloseMenu,
        icon: 'close',
        accessibilityRole:'button',
        iconStyle: styles.iconStyle,
        underlayColor: '#000',
        color: colors.white,
        onPress: generateOnCloseIconPressHandler({
          navigation: props.navigation,
        }),
      }}
      centerComponent={<Logo />}
      containerStyle={styles.header}
      {...props}
    />
  );
};

export default DrawerHeader;
