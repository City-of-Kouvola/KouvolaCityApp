import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from './src/modules/navigation/NavigationContainer';
import { setTopLevelNavigator, closeDrawer } from './src/modules/navigation/components/NavigationService';
import SplashScreen from 'react-native-splash-screen';

const App = (): JSX.Element => {
  useEffect(() => SplashScreen.hide(), []);
  const [urlNow, setUrlNow] = useState('https://www.kouvola.fi/');
  const [modalShow, setModalShow] = useState(true);

  const changeUrlIdea = (): void => {
    setUrlNow('https://www.onxideaa.fi/');
  };

  const changeUrlJobs = (): void => {
    setUrlNow('https://www.kouvola.fi/avoimet_tyopaikat/');
  };

  const changeUrlEnquiries = (): void => {
    setUrlNow('https://www.kouvola.fi/kyselyt');
  };

  const changeUrlRoutes = (): void => {
    setUrlNow('https://kouvola.digitransit.fi/');
  };

  const changeUrlTapahtumat = (): void => {
    setUrlNow('https://kymenlaaksonyt.fi/');
  };

  const changeUrlVisit = (): void => {
    setUrlNow('https://visitkouvola.fi/fi');
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
          jobs: changeUrlJobs,
          enquiries: changeUrlEnquiries,
          tapahtumat: changeUrlTapahtumat,
          routes: changeUrlRoutes,
          visit: changeUrlVisit,
          showModal: modalShow,
          enableModal: changeModalShow,
          disableModal: changeModalHide,
          target: urlNow,
        }}
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default App;
