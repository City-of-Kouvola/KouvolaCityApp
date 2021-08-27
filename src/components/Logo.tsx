import React from 'react';
import { StyleSheet } from 'react-native';
import { Image } from 'react-native';

const styles = StyleSheet.create({
  headerLogo: {
    width: '100%',
    height: '100%',
  },
});

const Logo = () => (
  <Image
    source={require('assets/img/KouvolaWhiteLogo.png')}
    resizeMode='contain'
    style={styles.headerLogo}
  />
);
export default Logo;
