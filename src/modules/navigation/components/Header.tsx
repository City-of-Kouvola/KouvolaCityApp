import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { Header } from 'react-native-elements';
import { openDrawer, closeDrawer, goBack } from './NavigationService';
import logo from 'assets/img/kouvolalogo.jpg';
import styles from '../styles';
import colors from 'config/colors';

export const MainHeader = (props: any): JSX.Element => {
  return (
    <Header
      leftComponent={{
        icon: 'menu',
        iconStyle: styles.iconStyle,
        underlayColor: '#eee',
        color: colors.max,
        onPress: () => openDrawer(),
      }}
      centerComponent={
        <ImageBackground
          source={logo}
          resizeMode='center'
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
        icon: 'arrow-back',
        iconStyle: styles.iconStyle,
        underlayColor: '#f77952',
        color: colors.min,
        onPress: () => goBack(),
      }}
      centerComponent={
        <View>
          <Text>Test</Text>
        </View>
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
          resizeMode='center'
          style={styles.headerLogo}
        />
      }
      rightComponent={{
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
