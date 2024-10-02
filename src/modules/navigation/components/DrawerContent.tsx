import React, { useEffect } from 'react';
import { View, Text, AccessibilityInfo } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerStatus
} from '@react-navigation/drawer';

import DrawerHeader from './headers/DrawerHeader';
import styles from './headers/styles';
import { ERouteName } from '../typings';
import translationData from 'config/locales.json';

type navigationType =  "Home" | "LibraryCard" | "RoutePlanners" | "Visit" | 
"Enquiries" | "TrimbleFeedBack" | "Events" |  "OnlineStore"

const navigationData: {name: navigationType, route: ERouteName}[] = [
  {name: "Home", route: ERouteName.HOME},
  {name: "LibraryCard", route: ERouteName.LIBRARY_CARD},
  {name: "RoutePlanners", route: ERouteName.ROUTE_PLANNER},
  {name: "OnlineStore", route: ERouteName.ONLINE_STORE},
  {name: "Events", route: ERouteName.EVENTS},
  {name: "TrimbleFeedBack", route: ERouteName.TRIMBLE_FEEDBACK_REDIRECT},
  {name: "Visit", route: ERouteName.VISIT_KVL},
  {name: "Enquiries", route: ERouteName.ENQUIRY},  
]

const createDrawerContent = (navigation: any) => {  
  return navigationData.map(({name, route}: {name: navigationType, route: ERouteName}) => {
    return (
      <DrawerItem          
        key={`drawer-item-${name}`}
        label={() => generateItemLabels(name)}
        style={styles.headerItem}
        pressColor={'white'}
        activeBackgroundColor={'#212121'}          
        onPress={generateOnItemPressHandler({
          navigation: navigation,
          route: route,
        })}            
      />
    )
    })
}

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

  const generateItemLabels = (item: navigationType): JSX.Element => {
    const externalApp = (item === "TrimbleFeedBack" || item === "OnlineStore")
    const labelText = (externalApp) ? translationData.Labels.finnish.ExternalApps[item] 
      : translationData.Labels.finnish.Navigation[item]
    const accessibilityText = (externalApp) ? translationData.Accessibility.finnish.ExternalApps[item] 
      : translationData.Accessibility.finnish.Navigation[item]
  
    return (
      <Text style={styles.headerLabel} accessibilityLabel={accessibilityText}>{labelText}</Text>
    )
  };

const DrawerContent = (props: DrawerContentComponentProps): JSX.Element => {

  const isDrawerOpen = useDrawerStatus();

  useEffect(()=> {
    if(isDrawerOpen === 'open') {
      AccessibilityInfo.announceForAccessibility(
        translationData.Accessibility.finnish.Navigation.OpenedMenu,
      );
    }
  },[isDrawerOpen])

  return (
    <View style={styles.headerMenu}>
      <DrawerHeader {...props} />
      <DrawerContentScrollView>
      {createDrawerContent(props.navigation)}
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;
