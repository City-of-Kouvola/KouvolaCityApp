import { Linking, Platform } from 'react-native';

import { IRedirectProps } from './typings';

const generateRedirectHandler = ({
  androidStoreUrl,
  iosStoreUrl,
  launchUrl,
}: Omit<IRedirectProps, 'applicationName'>) => () => {
  if (Platform.OS === 'android') {
    if (launchUrl) {
      Linking.canOpenURL(launchUrl).then((supported: boolean) => {
        if (supported) {
          Linking.openURL(launchUrl as string);
        } else {
          Linking.openURL(androidStoreUrl);
        }
      });
    } else {
      Linking.openURL(androidStoreUrl);
    }
  } else {
    if (launchUrl) {
      Linking.canOpenURL(launchUrl).then((supported: boolean) => {
        if (supported) {
          Linking.openURL(launchUrl as string);
        } else {
          Linking.openURL(iosStoreUrl);
        }
      });
    } else {
      Linking.openURL(iosStoreUrl);
    }
  }
};

export const generateOnFocusHandler = generateRedirectHandler;
export const generateOnBtnPressHandler = generateRedirectHandler;
