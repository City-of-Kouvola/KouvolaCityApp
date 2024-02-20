import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { generateCommonStackOptions } from '../helpers';
import { ERouteName, IHasInitialRoute, TStackScreenProps } from '../typings';
import Redirect, { IRedirectProps } from 'components/Redirect';
import { trimble } from 'config/Redirectroutes';

type TRedirectStackScreen = {
  [key in
    | ERouteName.TRIMBLE_FEEDBACK_REDIRECT]: object | undefined;
};

type TRedirectStackProps = Pick<
  TStackScreenProps<TRedirectStackScreen>,
  'name'
> &
  IHasInitialRoute &
  IRedirectProps;

const REDIRECT_STACKS_DATA: Readonly<TRedirectStackProps[]> = [
  {
    initialRouteName: ERouteName.TRIMBLE_FEEDBACK_REDIRECT_INITIAL,
    name: ERouteName.TRIMBLE_FEEDBACK_REDIRECT,
    ...trimble,
  }
] as const;

const Stack = createStackNavigator();

const REDIRECT_STACKS = REDIRECT_STACKS_DATA.map(
  ({ initialRouteName, name, ...others }) => ({
    [name]: () => (
      <Stack.Navigator
        screenOptions={{ ...generateCommonStackOptions() }}
        {...{ initialRouteName }}>
        <Stack.Screen name={initialRouteName}>
          {props => <Redirect {...others} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    ),
  }),
).reduce((accumulator, currVal) => ({
  ...accumulator,
  ...currVal,
}));

export default REDIRECT_STACKS;
