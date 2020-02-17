import React from 'react';
import {
  createAppContainer,
  NavigationRouteConfigMap,
  NavigationRoute,
} from 'react-navigation';
import { View, PanResponder } from 'react-native';
import { createStackNavigator, HeaderTitle } from 'react-navigation-stack';
import {
  createDrawerNavigator,
  NavigationDrawerProp,
  NavigationDrawerOptions,
  NavigationDrawerConfig,
} from 'react-navigation-drawer';
import NavigationContent from './components/NavigationContent';
import HomeView from 'components/Home';
import Redirect from 'components/Redirect';
import { MainHeader, BackHeader } from './components/Header';
import { kvlInstagram, kvlMobiili, trimble } from 'config/Redirectroutes';
import { WebViewModule } from 'OpenCityKvlModules';

const OpenJobOffers = createStackNavigator({
  Events: {
    screen: (props: any) => (
      React.useEffect(() => {
        if (props.screenProps.updater2 === 5) {
          const unsubscribe = props.navigation.addListener('willFocus', () => {
            props.screenProps.up2();
            console.log('Reloaded ' + props.screenProps.updater2 + ' 2 ');
          });

          // Return the function to unsubscribe from the event so it gets removed on unmount
          return () => unsubscribe;
        }
      }, [props.screenProps.updater2]),
      <WebViewModule
        key={props.screenProps.updater2}
        src='https://www.kouvola.fi/avoimet_tyopaikat/'
        modalTimeout={5000}
        modalVisible={props.screenProps.modal2}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const masterNavigator = createStackNavigator({
  Home: {
    screen: (props: any) => <HomeView {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
  WebView: {
    screen: (props: any) => (
      <WebViewModule
        src={props.screenProps.target}
        modalTimeout={5000}
        modalVisible={props.screenProps.showModal}
        onHideModal={props.screenProps.disableModal}
        {...props}
      />
    ),
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
  kvlInstagramRedirect: {
    screen: (props: any) => <Redirect {...kvlInstagram} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
  kvlMobiiliRedirect: {
    screen: (props: any) => <Redirect {...kvlMobiili} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
  trimbleFeedbackRedirect: {
    screen: (props: any) => <Redirect {...trimble} {...props} />,
    navigationOptions: {
      header: () => <MainHeader />,
    },
  },
});

const Enquiries = () => (<View style={{ flex: 1 }}><MainHeader /><WebViewModule
  key={1}
  src='https://www.kouvola.fi/kyselyt'
  modalTimeout={5000}
  modalVisible={true}
/></View>);

const translationData = require('config/locales.json');

const RouteConfigs: NavigationRouteConfigMap<
  NavigationDrawerOptions,
  NavigationDrawerProp<NavigationRoute>
> = {
  [translationData.Labels.finnish.Navigation.Home]: masterNavigator,
  [translationData.Labels.finnish.Navigation.RoutePlanners]: masterNavigator,
  [translationData.Labels.finnish.ExternalApps.Kouvola]: masterNavigator,
  [translationData.Labels.finnish.Navigation.OnxIdeaa]: masterNavigator,
  [translationData.Labels.finnish.Navigation.Visit]: masterNavigator,
  [translationData.Labels.finnish.Navigation.Enquiries]: masterNavigator,
  [translationData.Labels.finnish.ExternalApps.TrimbleFeedBack]: masterNavigator,
  [translationData.Labels.finnish.Navigation.Tapahtumat]: masterNavigator,
};

const DrawerNavigatorConfig: NavigationDrawerConfig = {
  contentComponent: NavigationContent,
};

const Drawer = createDrawerNavigator(RouteConfigs, DrawerNavigatorConfig);

export const NavigationContainer = createAppContainer(Drawer);
