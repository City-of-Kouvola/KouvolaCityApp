import React from 'react';
import { View, ScrollView } from 'react-native';
import { DrawerItems } from 'react-navigation-drawer';
import { DrawerHeader } from './Header';
import styles from '../styles';

const DrawerContent = (props: any) => {
  return (
    <View style={styles.headerMenu}>
      <DrawerHeader />
      <ScrollView>
        <DrawerItems labelStyle={styles.headerItems} {...props} />
      </ScrollView>
    </View>
  );
};

export default DrawerContent;
