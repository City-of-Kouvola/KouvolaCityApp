import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import { DrawerContentComponentProps } from '@react-navigation/drawer';

import DrawerHeader from './headers/DrawerHeader';
import styles from './headers/styles';
import { ERouteName } from '../typings';
import translationData from 'config/locales.json';

const NAVIGATION_MAP = {
  [translationData.Labels.finnish.Navigation.Home]: ERouteName.HOME,
  [translationData.Labels.finnish.Navigation.Librarycard]:
    ERouteName.LIBRARY_CARD,
  [translationData.Labels.finnish.Navigation.RoutePlanners]:
    ERouteName.ROUTE_PLANNER,
  [translationData.Labels.finnish.Navigation.Visit]: ERouteName.VISIT_KVL,
  [translationData.Labels.finnish.Navigation.Enquiries]: ERouteName.ENQUIRY,
  [translationData.Labels.finnish.ExternalApps.TrimbleFeedBack]:
    ERouteName.TRIMBLE_FEEDBACK_REDIRECT,
  [translationData.Labels.finnish.ExternalApps.KouvolaJoukkoliikenne]:
    ERouteName.WALTTI_MOBIILI_REDIRECT,
  [translationData.Labels.finnish.Navigation.Events]: ERouteName.EVENTS,
  [translationData.Labels.finnish.Navigation.Feedback]: ERouteName.FEEDBACK,
} as const;

type TGenerateOnItemPressHandlerParams = Pick<
  DrawerContentComponentProps,
  'navigation'
> & {
  route: ERouteName;
};

const generateOnItemPressHandler =
  ({ navigation, route }: TGenerateOnItemPressHandlerParams) =>
  () => {
    navigation.closeDrawer();
    navigation.navigate(route);
  };

const DrawerContent = (props: DrawerContentComponentProps): JSX.Element => {
  return (
    <View style={styles.headerMenu}>
      <DrawerHeader {...props} />
      <ScrollView>
        {Object.entries(NAVIGATION_MAP).map(([key, value]) => (
          <View key={key}>
            <Text
              numberOfLines={2}
              style={[styles.headerLabel]}
              accessibilityLabel={key}
              accessibilityHint={'button'}
              {...props}
              onPress={generateOnItemPressHandler({
                navigation: props.navigation,
                route: value,
              })}>
              {key}
            </Text>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default DrawerContent;
