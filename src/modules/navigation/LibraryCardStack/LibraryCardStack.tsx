import { LibraryCardModule } from 'library_card_module';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { generateCommonStackOptions } from '../helpers';
import { ERouteName } from '../typings';
import { useIsFocused } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function LibraryCardStack() {

  const LibraryCardWrapper = () => {
    const isFocused = useIsFocused();
    return <LibraryCardModule isFocused={isFocused} />
  }

  return (
    <Stack.Navigator
      screenOptions={{ ...generateCommonStackOptions() }}
      initialRouteName={ERouteName.LIBRARY_CARD_INITIAL}>
      <Stack.Screen
        name={ERouteName.LIBRARY_CARD_INITIAL}
        component={LibraryCardWrapper}
      />
    </Stack.Navigator>
  );
  
}
