import { Dispatch, SetStateAction } from 'react';
import { Linking } from 'react-native';
import InAppBrowser from 'react-native-inappbrowser-reborn';

import { IRedirectInAppBrowserProps } from './typings';

interface IGenerateRedirectHandlerParams extends IRedirectInAppBrowserProps {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const generateRedirectHandler = ({
  navigation,
  setIsLoading,
  url,
}: IGenerateRedirectHandlerParams) => async () => {
  try {
    if (await InAppBrowser.isAvailable()) {
      await InAppBrowser.open(url, {
        // iOS Properties
        dismissButtonStyle: 'close',
        modalPresentationStyle: 'fullScreen',
        modalEnabled: true,
        enableBarCollapsing: false,
        // Android Properties
        showTitle: true,
        forceCloseOnRedirection: false,
      });
      navigation.goBack(null);
    } else Linking.openURL(url);
  } catch (error) {
    setIsLoading(false);
    console.log(error);
  }
};

export const generateOnFocusHandler = generateRedirectHandler;
export const generateOnBtnPressHandler = generateRedirectHandler;
