import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { generateCommonStackOptions } from '../helpers';
import { ERouteName, IHasInitialRoute, TStackScreenProps } from '../typings';
import RedirectInAppBrowser, {
  IRedirectInAppBrowserProps,
} from 'components/RedirectInAppBrowser';

type TRedirectInAppBrowserStackScreen = {
  [key in ERouteName.EVENTS | ERouteName.VISIT_KVL]: object | undefined;
};

type TRedirectInAppBrowserStackProps = Pick<
  TStackScreenProps<TRedirectInAppBrowserStackScreen>,
  'name'
> &
  IHasInitialRoute &
  Pick<IRedirectInAppBrowserProps, 'url'>;

const REDIRECT_IN_APP_BROWSER_STACKS_DATA: Readonly<
  TRedirectInAppBrowserStackProps[]
> = [
  {
    initialRouteName: ERouteName.EVENTS_INITIAL,
    name: ERouteName.EVENTS,
    url: 'https://kymenlaaksonyt.fi/',
  },
  {
    initialRouteName: ERouteName.VISIT_KVL_INITIAL,
    name: ERouteName.VISIT_KVL,
    url: 'https://visitkouvola.fi/suunnittele-matkasi',
  },
] as const;

const Stack = createStackNavigator();

const REDIRECT_IN_APP_BROWSER_STACKS = REDIRECT_IN_APP_BROWSER_STACKS_DATA.map(
  ({ initialRouteName, name, url }) => ({
    [name]: () => (
      <Stack.Navigator
        screenOptions={{ ...generateCommonStackOptions() }}
        {...{ initialRouteName }}>
        <Stack.Screen name={initialRouteName}>
          {props => <RedirectInAppBrowser {...{ url }} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    ),
  }),
).reduce((accumulator, currVal) => ({
  ...accumulator,
  ...currVal,
}));

export default REDIRECT_IN_APP_BROWSER_STACKS;
