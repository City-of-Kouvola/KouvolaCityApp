import React from 'react';
import { View, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { DrawerHeader } from './Header';
import styles from '../styles';

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
        />
      </ScrollView>
    </View>
  );
};

export default DrawerContent;
