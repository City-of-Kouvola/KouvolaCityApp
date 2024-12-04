import { LibraryCardModule } from 'modules';
import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';



const App = (): React.JSX.Element => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      SplashScreen.hide();
    }, 3000);

    return () => {
      clearTimeout(timeout)
    }
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LibraryCardModule/>
    </View>
  );
};

export default App;
