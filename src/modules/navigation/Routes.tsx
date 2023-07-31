import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import HomeStack from './HomeStack';
import DrawerContent from './components/DrawerContent';
import LibraryCardStack from './LibraryCardStack';
import redirectStacks from './redirectStacks';
import redirectInAppBrowserStacks from './redirectInAppBrowserStacks';
import { ERouteName, TStackScreenProps } from './typings';
import webViewStacks from './webViewStacks';

type TRootScreen = {
  [key: string]: object | undefined;
};

const DRAWER_DATA: Readonly<TStackScreenProps<TRootScreen>[]> = [
  {
    name: ERouteName.HOME,
    component: HomeStack,
  },
  {
    name: ERouteName.LIBRARY_CARD,
    component: LibraryCardStack,
  },
  {
    name: ERouteName.ROUTE_PLANNER,
    component: webViewStacks[ERouteName.ROUTE_PLANNER],
  },
  {
    name: ERouteName.WALTTI_MOBIILI_REDIRECT,
    component: redirectStacks[ERouteName.WALTTI_MOBIILI_REDIRECT],
  },
  {
    name: ERouteName.VISIT_KVL,
    component: redirectInAppBrowserStacks[ERouteName.VISIT_KVL],
  },
  {
    name: ERouteName.ENQUIRY,
    component: webViewStacks[ERouteName.ENQUIRY],
  },
  {
    name: ERouteName.EVENTS,
    component: redirectInAppBrowserStacks[ERouteName.EVENTS],
  },
  {
    name: ERouteName.TRIMBLE_FEEDBACK_REDIRECT,
    component: redirectStacks[ERouteName.TRIMBLE_FEEDBACK_REDIRECT],
  },
  {
    name: ERouteName.ONLINE_STORE,
    component: redirectInAppBrowserStacks[ERouteName.ONLINE_STORE]
  },
];

const Drawer = createDrawerNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{ header: () => null }}
        drawerContent={props => <DrawerContent {...props} />}>
        {DRAWER_DATA.map(({ name, component }) => (
          <Drawer.Screen
            key={`drawer-screen-${name}`}
            {...{ name }}
            component={component!}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
