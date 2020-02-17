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
                props.screenProps.enableModal();
                props.navigation.navigate('WebView');
                break;
              case translationData.Labels.finnish.Navigation.OnxIdeaa:
                props.screenProps.idea();
                props.screenProps.enableModal();
                props.navigation.navigate('WebView');
                break;
              case translationData.Labels.finnish.Navigation.Visit:
                props.screenProps.visit();
                props.screenProps.enableModal();
                props.navigation.navigate('WebView');
                break;
              case translationData.Labels.finnish.Navigation.Enquiries:
                props.screenProps.enquiries();
                props.screenProps.enableModal();
                props.navigation.navigate('WebView');
                break;
              case translationData.Labels.finnish.ExternalApps.TrimbleFeedBack:
                props.navigation.navigate('trimbleFeedbackRedirect');
                break;
              case translationData.Labels.finnish.ExternalApps.Kouvola:
                props.navigation.navigate('kvlMobiiliRedirect');
                break;
              case translationData.Labels.finnish.Navigation.Tapahtumat:
                props.screenProps.enableModal();
                props.screenProps.tapahtumat();
                props.navigation.navigate('WebView');
                break;
              default:
                props.navigation.navigate('Home');
                closeDrawer();
                return;
            }
            closeDrawer();
          }}
        />
      </ScrollView>
    </View>
  );
};

export default DrawerContent;
