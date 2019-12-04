import React from 'react';
import { View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from './src/modules/navigation/NavigationContainer';
import { setTopLevelNavigator } from './src/modules/navigation/components/NavigationService';

const App = (): JSX.Element => {
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
