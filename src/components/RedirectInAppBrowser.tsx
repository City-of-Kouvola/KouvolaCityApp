import React, { useState } from 'react';
import { View, Text, Linking, ActivityIndicator } from 'react-native';
import { Button } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation';
import InAppBrowser from 'react-native-inappbrowser-reborn';

interface Props {
  url: string;
  navigation: any;
}

const RedirectInAppBrowser = (props: Props): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  const handleRedirect = async () => {
    try {
      if (await InAppBrowser.isAvailable()) {
        await InAppBrowser.open(props.url, {
          // iOS Properties
          dismissButtonStyle: 'close',
          modalPresentationStyle: 'fullScreen',
          modalEnabled: true,
          enableBarCollapsing: false,
          // Android Properties
          showTitle: true,
          forceCloseOnRedirection: false,
        });
        props.navigation.goBack(null);
      } else Linking.openURL(props.url);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  if (!isLoading) {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <NavigationEvents
          onDidFocus={() => handleRedirect()}></NavigationEvents>
        <Text style={{ marginTop: 10 }}>Ohjataan sivustolle:</Text>
        <Button title={props.url} onPress={handleRedirect} type='clear' />
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <NavigationEvents
          onDidFocus={() => handleRedirect()}></NavigationEvents>
        <ActivityIndicator size='large' />
      </View>
    );
  }
};

export default RedirectInAppBrowser;
