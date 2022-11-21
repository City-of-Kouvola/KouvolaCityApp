import React, { useEffect } from 'react';
import { View, Text, AccessibilityInfo } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';

import DrawerHeader from './headers/DrawerHeader';
import styles from './headers/styles';
import { ERouteName } from '../typings';
import translationData from 'config/locales.json';

type navigationType =  "Home" | "LibraryCard" | "RoutePlanners" | "Visit" | 
"Enquiries" | "TrimbleFeedBack" | "KouvolaJoukkoliikenne" | "Events" |  "Feedback"

const navigationData: {name: navigationType, route: ERouteName}[] = [
  {name: "Home", route: ERouteName.HOME},
  {name: "LibraryCard", route: ERouteName.LIBRARY_CARD},
  {name: "RoutePlanners", route: ERouteName.ROUTE_PLANNER},
  {name: "Visit", route: ERouteName.VISIT_KVL},
  {name: "Enquiries", route: ERouteName.ENQUIRY},  
  {name: "TrimbleFeedBack", route: ERouteName.TRIMBLE_FEEDBACK_REDIRECT},
  {name: "KouvolaJoukkoliikenne", route: ERouteName.WALTTI_MOBIILI_REDIRECT},
  {name: "Events", route: ERouteName.EVENTS},
  {name: "Feedback", route: ERouteName.FEEDBACK},
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
    const externalApp = (item === "TrimbleFeedBack" || item=== "KouvolaJoukkoliikenne")
    const labelText = (externalApp) ? translationData.Labels.finnish.ExternalApps[item] 
      : translationData.Labels.finnish.Navigation[item]
    const accessibilityText = (externalApp) ? translationData.Accessibility.finnish.ExternalApps[item] 
      : translationData.Accessibility.finnish.Navigation[item]
  
    return (
      <Text style={styles.headerLabel} accessibilityLabel={accessibilityText}>{labelText}</Text>
    )
  };

const DrawerContent = (props: DrawerContentComponentProps): JSX.Element => {

  useEffect(()=> {
    const naviStateHistory: {status?:string,type:string}[] = props.navigation.getState().history as any
    const status = naviStateHistory && naviStateHistory.length >= 2 ? naviStateHistory.find((historyObject)=> historyObject.status): false
    if(status && status.status === 'open') {
    AccessibilityInfo.announceForAccessibility(
      translationData.Accessibility.finnish.Navigation.OpenedMenu,
    );}
  },[props.navigation.getState().history])

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
