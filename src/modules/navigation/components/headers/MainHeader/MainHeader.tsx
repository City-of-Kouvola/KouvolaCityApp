import React from 'react';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
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
      leftComponent={(
        <TouchableOpacity 
          accessible={true}
          accessibilityLabel={translationData.Accessibility.finnish.Navigation.OpenMenu}
          accessibilityRole={'button'}
          onPress= {generateOnMenuIconPressHandler({
            navigation: props.navigation,
          })}>
          <Icon accessible={false} name='menu' style={styles.iconStyle} color={colors.white}/>
        </TouchableOpacity>
      )}
      centerComponent={<Logo />}
      containerStyle={styles.header}
      {...props}
    />
  );
};

export default MainHeader;
