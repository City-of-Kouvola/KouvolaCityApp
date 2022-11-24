import React from 'react';
import { Header, Icon } from 'react-native-elements';
import { StackHeaderProps } from '@react-navigation/stack';

import { generateOnBackIconPressHandler } from './helpers';
import styles from '../styles';
import colors from 'config/colors';
import Logo from 'components/Logo';
import translationData from 'config/locales.json';
import { TouchableOpacity } from 'react-native-gesture-handler';

const BackHeader = (props: StackHeaderProps): JSX.Element => {
  return (
    <Header
      statusBarProps={{
        barStyle: 'light-content',
        backgroundColor: colors.black,
      }}
      leftComponent={(
        <TouchableOpacity 
        accessible={true}
        style={{flex:1}}
        accessibilityLabel={translationData.Accessibility.finnish.Navigation.GoBack}
        accessibilityRole={'button'}
        onPress= {generateOnBackIconPressHandler({
          navigation: props.navigation,
        })}>
          <Icon accessible={false} importantForAccessibility='no-hide-descendants' name='arrow-back' style={styles.iconStyle} color={colors.white} />
        </TouchableOpacity>
      )}
      centerComponent={<Logo />}
      containerStyle={styles.header}
      {...props}
    />
  );
};

export default BackHeader;
