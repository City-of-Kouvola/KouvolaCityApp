import React from 'react';
import { Header } from 'react-native-elements';
import { StackHeaderProps } from '@react-navigation/stack';

import { generateOnBackIconPressHandler } from './helpers';
import styles from '../styles';
import colors from 'config/colors';
import Logo from 'components/Logo';
import translationData from 'config/locales.json';

const BackHeader = (props: StackHeaderProps): JSX.Element => {
  return (
    <Header
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.black,
      }}
      leftComponent={{
        accessible: true,
        accessibilityLabel:
          translationData.Accessibility.finnish.Navigation.GoBack,
        accessibilityRole:'button',
        icon: 'arrow-back',
        iconStyle: styles.iconStyle,
        underlayColor: '#000',
        color: colors.white,
        onPress: generateOnBackIconPressHandler({
          navigation: props.navigation,
        }),
      }}
      centerComponent={<Logo />}
      containerStyle={styles.header}
      {...props}
    />
  );
};

export default BackHeader;
