import React from 'react';
import { View, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { DrawerHeader } from './Header';
import styles from '../styles';
import { closeDrawer } from './NavigationService';

const translationData = require('config/locales.json');

const DrawerContent = (props: any): JSX.Element => {
  return (
    <View style={styles.headerMenu}>
      <DrawerHeader />
      <ScrollView>
        <DrawerItems
          labelStyle={styles.headerLabel}
          itemStyle={styles.headerItem}
          activeBackgroundColor={'#fff'}
          activeLabelStyle={styles.headerActiveLabel}
          {...props}
          onItemPress={({ route }) => {
            switch (route.routeName) {
              case translationData.Labels.finnish.Navigation.Home:
                props.navigation.navigate('Home');
                break;
              case translationData.Labels.finnish.Navigation.RoutePlanners:
                props.screenProps.routes();
                props.navigation.navigate('Router');
                break;
              case translationData.Labels.finnish.Navigation.OnxIdeaa:
                props.screenProps.idea();
                props.navigation.navigate('Ideaer');
                break;
              case translationData.Labels.finnish.Navigation.Visit:
                props.screenProps.visit();
                props.navigation.navigate('Visiter');
                break;
              case translationData.Labels.finnish.Navigation.Enquiries:
                props.screenProps.enquiries();
                props.navigation.navigate('Enquirer');
                break;
              case translationData.Labels.finnish.ExternalApps.TrimbleFeedBack:
                props.navigation.navigate('trimbleFeedbackRedirect');
                break;
              case translationData.Labels.finnish.ExternalApps
                .KouvolaJoukkoliikenne:
                props.navigation.navigate('kvlMobiiliRedirect');
                break;
              case translationData.Labels.finnish.Navigation.Events:
                props.screenProps.events();
                props.navigation.navigate('Events');
                break;
              default:
                props.navigation.navigate('Home');
                closeDrawer();
                return;
            }
            closeDrawer();
            return;
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DrawerContent;
