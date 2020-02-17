import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from './src/modules/navigation/NavigationContainer';
import { setTopLevelNavigator } from './src/modules/navigation/components/NavigationService';
import SplashScreen from 'react-native-splash-screen';

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
        }}
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default App;
