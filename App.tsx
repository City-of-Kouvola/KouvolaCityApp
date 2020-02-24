import React, { useEffect, useState } from 'react';
import { View, Platform } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from './src/modules/navigation/NavigationContainer';
import { setTopLevelNavigator } from './src/modules/navigation/components/NavigationService';
import SplashScreen from 'react-native-splash-screen';
import { PermissionsAndroid } from 'react-native';
const translationData = require('config/locales.json');

const App = (): JSX.Element => {
  useEffect(() => SplashScreen.hide(), []);
  const [ideaKey, setIdeaKey] = useState(0);
  const [visitKey, setVisitKey] = useState(400);
  const [routeKey, setRouteKey] = useState(300);
  const [enquiryKey, setEnquiryKey] = useState(200);
  const [eventKey, setEventKey] = useState(100);
  const [modalShow, setModalShow] = useState(true);

  const changeUrlIdea = (): void => {
    setIdeaKey(ideaKey + 1);
  };

  const changeUrlEnquiries = (): void => {
    setEnquiryKey(enquiryKey + 1);
  };

  const changeUrlRoutes = (): void => {
    setRouteKey(routeKey + 1);
  };

  const changeUrlEvents = (): void => {
    setEventKey(eventKey + 1);
  };

  const changeUrlVisit = (): void => {
    setVisitKey(visitKey + 1);
  };

  const changeModalShow = (): void => {
    setModalShow(true);
  };

  const changeModalHide = (): void => {
    setModalShow(false);
  };

  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: translationData.Labels.finnish.Permissions.Title,
        message: translationData.Labels.finnish.Permissions.Message,
        buttonPositive: translationData.Labels.finnish.Permissions.Accept,
      },
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
        screenProps={{
          idea: changeUrlIdea,
          enquiries: changeUrlEnquiries,
          events: changeUrlEvents,
          routes: changeUrlRoutes,
          visit: changeUrlVisit,
          showModal: modalShow,
          enableModal: changeModalShow,
          disableModal: changeModalHide,
          ideasKey: ideaKey,
          enquirysKey: enquiryKey,
          eventsKey: eventKey,
          routesKey: routeKey,
          visitsKey: visitKey,
          modalTimeout: 2500,
        }}
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default App;
