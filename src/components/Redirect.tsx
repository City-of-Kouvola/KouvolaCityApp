import React from 'react';
import { View, Text, Linking, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';

interface Props {
  applicationName: string;
  launchUrl?: string;
  androidStoreUrl: string;
  iosStoreUrl: string;
}

const Redirect = (props: Props): JSX.Element => {
  const handleRedirect = () => {
    if (Platform.OS === 'android') {
      if (props.launchUrl) {
        Linking.canOpenURL(props.launchUrl).then((supported: boolean) => {
          if (supported) {
            Linking.openURL(props.launchUrl as string);
          } else {
            Linking.openURL(props.androidStoreUrl);
          }
        });
      } else {
        Linking.openURL(props.androidStoreUrl);
      }
    } else {
      if (props.launchUrl) {
        Linking.canOpenURL(props.launchUrl).then((supported: boolean) => {
          if (supported) {
            Linking.openURL(props.launchUrl as string);
          } else {
            Linking.openURL(props.iosStoreUrl);
          }
        });
      } else {
        Linking.openURL(props.iosStoreUrl);
      }
    }
  };

  return (
    <NavigationEvents onDidFocus={() => handleRedirect()}>
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Text style={{ marginTop: 10 }}>
          Ohjataan sovellukseen: {props.applicationName}
        </Text>
        <Button title='Avaa sovellus' onPress={handleRedirect} type='clear' />
      </View>
    </NavigationEvents>
  );
};

export default Redirect;
