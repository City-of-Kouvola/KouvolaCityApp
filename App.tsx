import React, { useEffect } from 'react';
import { View, PermissionsAndroid, Platform } from 'react-native';
import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';

import Routes from 'modules/navigation/Routes';
import translationData from 'config/locales.json';

const App = (): React.JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => {
      clearTimeout(timeout)
    }
  }, []);

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
      <Routes />
    </View>
  );
};

export default App;
