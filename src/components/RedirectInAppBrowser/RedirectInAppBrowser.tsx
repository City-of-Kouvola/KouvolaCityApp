import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { Button } from '@rneui/themed';

import { generateOnBtnPressHandler, generateOnFocusHandler } from './helpers';
import { IRedirectInAppBrowserProps } from './typings';

const RedirectInAppBrowser = ({
  navigation,
  url,
}: IRedirectInAppBrowserProps): JSX.Element => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsub = navigation.addListener(
      'focus',
      generateOnFocusHandler({ navigation, setIsLoading, url }),
    );

    return unsub;
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: isLoading ? 'center' : 'flex-start',
      }}>
      {isLoading ? (
        <ActivityIndicator size='large' />
      ) : (
        <>
          <Text style={{ marginTop: 10 }}>Ohjataan sivustolle:</Text>
          <Button
            title={url}
            onPress={generateOnBtnPressHandler({
              navigation,
              setIsLoading,
              url,
            })}
            type='clear'
          />
        </>
      )}
    </View>
  );
};

export default RedirectInAppBrowser;
