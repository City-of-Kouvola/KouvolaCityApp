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
import HomeView from 'components/Home';
import Redirect from 'components/Redirect';
import { MainHeader } from './components/Header';
import { kvlMobiili, trimble } from 'config/Redirectroutes';
import { WebViewModule } from 'OpenCityKvlModules';
import RedirectInAppBrowser from 'components/RedirectInAppBrowser';

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

const events = createStackNavigator({
  Events: {
    screen: (props: any) => (
      <RedirectInAppBrowser url='https://kymenlaaksonyt.fi/' {...props} />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const visitKvl = createStackNavigator({
  Visiter: {
    screen: (props: any) => (
      <RedirectInAppBrowser url='https://visitkouvola.fi/fi' {...props} />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const onxIdea = createStackNavigator({
  Ideaer: {
    screen: (props: any) => (
      <RedirectInAppBrowser url='https://www.onxideaa.fi/' {...props} />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const Routeplans = createStackNavigator({
  Router: {
    screen: (props: any) => (
      <WebViewModule
        key={props.screenProps.routesKey}
        src='https://kouvola.digitransit.fi/'
        modalTimeout={props.screenProps.modalTimeout}
        modalVisible={false}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const Enquiries = createStackNavigator({
  Enquirer: {
    screen: (props: any) => (
      <WebViewModule
        key={props.screenProps.enquirysKey}
        src='https://www.kouvola.fi/kyselyt'
        modalTimeout={props.screenProps.modalTimeout}
        modalVisible={false}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const Feedbacks = createStackNavigator({
  Feeder: {
    screen: (props: any) => (
      <WebViewModule
        src='https://forms.office.com/Pages/ResponsePage.aspx?id=ExOyCIOAqkKvHS9MnyytXSlNvRMzFBBMnbnK5I_oJr1UNFAyNjRLUTI4SVVRR1RNRzJYQzQ2WVpHVyQlQCN0PWcu'
        modalTimeout={props.screenProps.modalTimeout}
        modalVisible={false}
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
  [translationData.Labels.finnish.Navigation.RoutePlanners]: Routeplans,
  [translationData.Labels.finnish.ExternalApps
    .KouvolaJoukkoliikenne]: kvlMobiiliRedirect,
  [translationData.Labels.finnish.Navigation.OnxIdeaa]: onxIdea,
  [translationData.Labels.finnish.Navigation.Visit]: visitKvl,
  [translationData.Labels.finnish.Navigation.Enquiries]: Enquiries,
  [translationData.Labels.finnish.ExternalApps
    .TrimbleFeedBack]: trimbleFeedbackRedirect,
  [translationData.Labels.finnish.Navigation.Events]: events,
  [translationData.Labels.finnish.Navigation.Feedback]: Feedbacks,
};

const DrawerNavigatorConfig: NavigationDrawerConfig = {
  contentComponent: NavigationContent,
};

const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export const NavigationContainer = createAppContainer(Drawer);
