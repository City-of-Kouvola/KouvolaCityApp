import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import BackHeader from '../components/headers/BackHeader';
import { generateCommonStackOptions } from '../helpers';
import { ERouteName, TStackScreenProps } from '../typings';
import { ArticleFull } from '../../news/components';
import HomeView from 'components/Home';

const Stack = createStackNavigator();

type THomeStackScreen = {
  [key in ERouteName.DETAILS | ERouteName.HOME_INITIAL]: object | undefined;
};

const HOME_STACK_DATA: Readonly<TStackScreenProps<THomeStackScreen>[]> = [
  {
    name: ERouteName.HOME_INITIAL,
    component: HomeView,
  },
  {
    name: ERouteName.DETAILS,
    component: ArticleFull,
    options: {
      header: props => <BackHeader {...props} />,
    },
  },
];

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{ ...generateCommonStackOptions() }}
      initialRouteName={ERouteName.HOME_INITIAL}>
      {HOME_STACK_DATA.map(data => (
        <Stack.Screen key={`home-stack-screen-${data.name}`} {...data} />
      ))}
    </Stack.Navigator>
  );
}
