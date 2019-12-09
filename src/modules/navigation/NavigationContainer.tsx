import React from 'react';
import {} from 'react-native';
import {
  createAppContainer,
  NavigationRouteConfigMap,
  NavigationRoute,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {
  createDrawerNavigator,
  NavigationDrawerProp,
  NavigationDrawerOptions,
  NavigationDrawerConfig,
} from 'react-navigation-drawer';
import NavigationContent from './components/NavigationContent';
import colors from 'config/colors';
import Test from 'components/Test';
import { MainHeader, BackHeader } from './components/Header';

const Placeholder = createStackNavigator({
  Events: {
    screen: (props: any) => <Test {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
  Details: {
    screen: (props: any) => <Test {...props} />,
    navigationOptions: {
      header: () => <BackHeader />,
    },
  },
});

const RouteConfigs: NavigationRouteConfigMap<
  NavigationDrawerOptions,
  NavigationDrawerProp<NavigationRoute>
> = {
  Tapahtumat: Placeholder,
};

const DrawerNavigatorConfig: NavigationDrawerConfig = {
  contentComponent: NavigationContent,
};

const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export const NavigationContainer = createAppContainer(Drawer);
