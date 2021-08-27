import React from 'react';
import { StackNavigationOptions } from '@react-navigation/stack';

import MainHeader from './components/headers/MainHeader';
import colors from 'config/colors';

export const generateCommonStackOptions = (): StackNavigationOptions => ({
  /**
   * @TODO The current version of React Navigation doesn't support nested navigation typings, so at this time let's accept the error below
   * Please solve this when if possible in the future
   */
  cardStyle: {
    backgroundColor: colors.white,
  },
  header: props => <MainHeader {...props} />,
});
