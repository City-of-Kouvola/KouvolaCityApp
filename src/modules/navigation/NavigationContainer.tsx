import React from 'react';
import {
  createAppContainer,
  NavigationRouteConfigMap,
  NavigationRoute,
} from 'react-navigation';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
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
import { kvlInstagram, kvlMobiili, trimble } from 'config/Redirectroutes';
import { WebViewModule } from 'OpenCityKvlModules';

const Home = createStackNavigator({
  Home: {
    screen: (props: any) => <HomeView {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const trimbleFeedbackRedirect = createStackNavigator({
  trimbleFeedbackRedirect: {
    screen: (props: any) => <Redirect {...trimble} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const kvlMobiiliRedirect = createStackNavigator({
  kvlMobiiliRedirect: {
    screen: (props: any) => <Redirect {...kvlMobiili} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const kvlInstagramRedirect = createStackNavigator({
  kvlMobiiliRedirect: {
    screen: (props: any) => <Redirect {...kvlInstagram} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const FoodMenus = createStackNavigator({
  Events: {
    screen: (props: any) => (
      <WebViewModule
        src='https://www.kouvola.fi/kouvolankaupunki/kouvola-tietoa/ruokapalvelut/ruokalistat/

        '
        modalTimeout={5000}
        modalVisible={true}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const OpenJobOffers = createStackNavigator({
  Events: {
    screen: (props: any) => (
      <WebViewModule
        src='https://www.kouvola.fi/avoimet_tyopaikat/'
        modalTimeout={5000}
        modalVisible={true}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const SwimmingTimes = createStackNavigator({
  Events: {
    screen: (props: any) => (
      <WebViewModule
        src='https://www.kouvola.fi/liikuntatilojen-kayttoaikarajoitukset/'
        modalTimeout={5000}
        modalVisible={true}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const Routeplans = createStackNavigator({
  Events: {
    screen: (props: any) => (
      <WebViewModule
        src='https://kouvola.digitransit.fi/'
        modalTimeout={5000}
        modalVisible={true}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const Enquiries = createStackNavigator({
  Events: {
    screen: (props: any) => (
      <WebViewModule
        src='https://www.kouvola.fi/kyselyt'
        modalTimeout={5000}
        modalVisible={true}
        {...props}
      />
    ),
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
  [translationData.Labels.finnish.Navigation.SwimmingTimes]: SwimmingTimes,
  [translationData.Labels.finnish.Navigation.RoutePlanners]: Routeplans,
  [translationData.Labels.finnish.Navigation.OpenJobOffers]: OpenJobOffers,
  [translationData.Labels.finnish.Navigation.FoodMenus]: FoodMenus,
  [translationData.Labels.finnish.Navigation.Enquiries]: Enquiries,
  'Trimble Feedback': trimbleFeedbackRedirect,
  'Mobiili lippu': kvlMobiiliRedirect,
  'Kouvola instagram': kvlInstagramRedirect,
};

const DrawerNavigatorConfig: NavigationDrawerConfig = {
  contentComponent: NavigationContent,
};

const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export const NavigationContainer = createAppContainer(Drawer);
