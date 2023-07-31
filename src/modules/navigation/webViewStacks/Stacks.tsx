import { WebViewModule } from 'OpenCityKvlModules';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MODAL_TIMEOUT } from './configs';
import { generateCommonStackOptions } from '../helpers';
import { ERouteName, IHasInitialRoute, TStackScreenProps } from '../typings';

type TWebViewStackScreen = {
  [key in ERouteName.ENQUIRY | ERouteName.ROUTE_PLANNER]:
    | object
    | undefined;
};

type TWebViewStackProps = Pick<TStackScreenProps<TWebViewStackScreen>, 'name'> &
  IHasInitialRoute & {
    /**
     * @TODO try to use Pick<PropsOfWebViewModule, "src"> if possible
     */
    src: string;
  };

const WEB_VIEW_STACKS_DATA: Readonly<TWebViewStackProps[]> = [
  {
    initialRouteName: ERouteName.ENQUIRY_INITIAL,
    name: ERouteName.ENQUIRY,
    src: 'https://www.kouvola.fi/kyselyt',
  },
  {
    initialRouteName: ERouteName.ROUTE_PLANNER_INITIAL,
    name: ERouteName.ROUTE_PLANNER,
    src: 'https://kouvola.digitransit.fi/',
  },
] as const;

const Stack = createStackNavigator();

const WEB_VIEW_STACKS = WEB_VIEW_STACKS_DATA.map(
  ({ initialRouteName, name, src }) => ({
    [name]: () => (
      <Stack.Navigator
        screenOptions={{ ...generateCommonStackOptions() }}
        initialRouteName={initialRouteName}>
        <Stack.Screen name={initialRouteName}>
          {props => (
            <WebViewModule
              {...{ src }}
              {...props}
              modalTimeout={MODAL_TIMEOUT}
              modalVisible={false}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    ),
  }),
).reduce((accumulator, currVal) => ({ ...accumulator, ...currVal }));

export default WEB_VIEW_STACKS;
