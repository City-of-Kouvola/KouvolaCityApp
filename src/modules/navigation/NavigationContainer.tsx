import React from 'react';
import {} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import NavigationContent from './components/NavigationContent';
import colors from 'config/colors';
import Test from 'components/Test';
import { MainHeader, BackHeader } from './components/Header';

const Placeholder = createStackNavigator({
  Events: {
    screen: (props: any) => <Test {...props} />,
    navigationOptions: { header: <MainHeader /> },
  },
  Details: {
    screen: (props: any) => <Test {...props} />,
    navigationOptions: { header: <BackHeader /> },
  },
});

const Drawer = createDrawerNavigator(
  {
    Tapahtumat: Placeholder,
  },
  {
    contentComponent: NavigationContent,
  },
);

export const NavigationContainer = createAppContainer(Drawer);
