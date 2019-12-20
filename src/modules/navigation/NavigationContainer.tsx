import React from 'react';
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
import Test from 'components/Test';
import HomeView from 'components/Home';
import Redirect from 'components/Redirect';
import { MainHeader, BackHeader } from './components/Header';
import { RedirectData } from 'config/types';

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

const Home = createStackNavigator({
  Home: {
    screen: (props: any) => <HomeView {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const redirectTrimble: RedirectData = {
  applicationName: 'Trimble Feedback',
  androidStoreUrl: 'market://details?id=com.tekla.feedback&launch=true',
  iosStoreUrl: 'itms-apps://apps.apple.com/us/app/trimble-feedback/id816215762',
};

const redirectKvlMobiili: RedirectData = {
  applicationName: 'Kouvola mobiililippu',
  launchUrl: 'payiqkouvola://',
  androidStoreUrl: 'market://details?id=net.payiq.kouvola&launch=true',
  iosStoreUrl: 'itms-apps://apps.apple.com/us/app/kouvola/id1463762029',
};

const trimbleFeedbackRedirect = createStackNavigator({
  trimbleFeedbackRedirect: {
    screen: (props: any) => <Redirect {...redirectTrimble} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const kvlMobiiliRedirect = createStackNavigator({
  kvlMobiiliRedirect: {
    screen: (props: any) => <Redirect {...redirectKvlMobiili} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const translationData = require('config/locales.json');

const RouteConfigs: NavigationRouteConfigMap<
  NavigationDrawerOptions,
  NavigationDrawerProp<NavigationRoute>
> = {
  [translationData.Labels.finnish.Navigation.Home]: Home,
  [translationData.Labels.finnish.Navigation.SwimmingTimes]: Placeholder,
  [translationData.Labels.finnish.Navigation.RoutePlanners]: Home,
  [translationData.Labels.finnish.Navigation.OpenJobOffers]: Placeholder,
  [translationData.Labels.finnish.Navigation.FoodMenus]: Placeholder,
  [translationData.Labels.finnish.Navigation.Enquiries]: Placeholder,
  'Trimble Feedback': trimbleFeedbackRedirect,
  'Mobiili lippu': kvlMobiiliRedirect,
};

const DrawerNavigatorConfig: NavigationDrawerConfig = {
  contentComponent: NavigationContent,
};

const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export const NavigationContainer = createAppContainer(Drawer);
