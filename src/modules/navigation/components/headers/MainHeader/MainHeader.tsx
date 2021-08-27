import React from 'react';
import { Header } from 'react-native-elements';

import { generateOnMenuIconPressHandler } from './helpers';
import styles from '../styles';
import { TMainHeaderProps } from './typings';
import Logo from 'components/Logo';
import colors from 'config/colors';
import translationData from 'config/locales.json';

const MainHeader = (props: TMainHeaderProps): JSX.Element => {
  return (
    <Header
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.black,
      }}
      leftComponent={{
        accessible: true,
        accessibilityLabel:
          translationData.Accessibility.finnish.Navigation.OpenMenu,
        icon: 'menu',
        iconStyle: styles.iconStyle,
        underlayColor: '#000',
        color: colors.white,
        onPress: generateOnMenuIconPressHandler({
          navigation: props.navigation,
        }),
      }}
      centerComponent={<Logo />}
      containerStyle={styles.header}
      {...props}
    />
  );
};

export default MainHeader;
