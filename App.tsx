import React from 'react';
import { View } from 'react-native';
import Test from './src/components/Test';

const App = (): JSX.Element => {
  return (
    <View>
      <Test name={'a'} />
    </View>
  );
};

export default App;
