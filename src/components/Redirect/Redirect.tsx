import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

import { generateOnBtnPressHandler, generateOnFocusHandler } from './helpers';
import { IRedirectProps } from './typings';

const Redirect = ({
  androidStoreUrl,
  applicationName,
  iosStoreUrl,
  launchUrl,
}: IRedirectProps): JSX.Element => {
  const navigation = useNavigation();

  useEffect(() => {
    const unsub = navigation.addListener(
      'focus',
      generateOnFocusHandler({ androidStoreUrl, iosStoreUrl, launchUrl }),
    );

    return unsub;
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <Text style={{ marginTop: 10 }}>
        Ohjataan sovellukseen: {applicationName}
      </Text>
      <Button
        title='Avaa sovellus'
        onPress={generateOnBtnPressHandler({
          androidStoreUrl,
          iosStoreUrl,
          launchUrl,
        })}
        type='clear'
      />
    </View>
  );
};

export default Redirect;
