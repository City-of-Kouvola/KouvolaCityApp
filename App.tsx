import React, { useEffect } from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from './src/modules/navigation/NavigationContainer';
import { setTopLevelNavigator } from './src/modules/navigation/components/NavigationService';
import SplashScreen from 'react-native-splash-screen';

const App = (): JSX.Element => {
  useEffect(() => SplashScreen.hide(), []);

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer
        ref={(navigatorRef) => {
          setTopLevelNavigator(navigatorRef);
        }}
      />
    </View>
  );
};

export default App;
