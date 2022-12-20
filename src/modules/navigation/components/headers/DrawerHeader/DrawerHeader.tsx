import React from 'react';
import { Header } from '@rneui/themed';
import { DrawerContentComponentProps } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/AntDesign';

import { generateOnCloseIconPressHandler } from './helpers';
import styles from '../styles';
import colors from 'config/colors';
import Logo from 'components/Logo';
import translationData from 'config/locales.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DrawerHeader = (props: DrawerContentComponentProps): JSX.Element => {
  return (
    <Header
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.black,
      }}
      rightComponent={
        <TouchableOpacity
          accessible={true}
          accessibilityLabel={
            translationData.Accessibility.finnish.Navigation.CloseMenu
          }
          accessibilityRole={'button'}
          onPress={generateOnCloseIconPressHandler({
            navigation: props.navigation,
          })}>
          <Icon
            accessible={false}
            name='close'
            style={styles.iconStyle}
            color={colors.white}
          />
        </TouchableOpacity>
      }
      centerComponent={<Logo />}
      containerStyle={styles.header}
      {...props}
    />
  );
};

export default DrawerHeader;
