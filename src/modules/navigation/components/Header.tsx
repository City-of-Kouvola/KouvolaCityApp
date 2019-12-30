import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { openDrawer, closeDrawer, goBack } from './NavigationService';
import logo from 'assets/img/kouvolalogo.png';
import styles from '../styles';
import colors from 'config/colors';
import translationData from 'config/locales.json';

export const MainHeader = (props: any): JSX.Element => {
  return (
    <Header
      leftComponent={{
        accessible: true,
        accessibilityLabel:
          translationData.Accessibility.finnish.Navigation.OpenMenu,
        icon: 'menu',
        iconStyle: styles.iconStyle,
        underlayColor: '#eee',
        color: colors.max,
        onPress: () => openDrawer(),
      }}
      centerComponent={
        <ImageBackground
          source={logo}
          resizeMode='contain'
          style={styles.headerLogo}
        />
      }
      containerStyle={styles.header}
      {...props}
    />
  );
};

export const BackHeader = (props: any): JSX.Element => {
  return (
    <Header
      leftComponent={{
        accessible: true,
        accessibilityLabel:
          translationData.Accessibility.finnish.Navigation.GoBack,
        icon: 'arrow-back',
        iconStyle: styles.iconStyle,
        underlayColor: '#f77952',
        color: colors.min,
        onPress: () => goBack(),
      }}
      centerComponent={
        <ImageBackground
          source={logo}
          resizeMode='contain'
          style={styles.headerLogo}
        />
      }
      containerStyle={styles.header}
      {...props}
    />
  );
};

export const DrawerHeader = (props: any): JSX.Element => {
  return (
    <Header
      centerComponent={
        <ImageBackground
          source={logo}
          resizeMode='contain'
          style={styles.headerLogo}
        />
      }
      rightComponent={{
        accessible: true,
        accessibilityLabel:
          translationData.Accessibility.finnish.Navigation.CloseMenu,
        icon: 'close',
        iconStyle: styles.iconStyle,
        color: colors.max,
        onPress: () => closeDrawer(),
      }}
      containerStyle={styles.header}
      {...props}
    />
  );
};
