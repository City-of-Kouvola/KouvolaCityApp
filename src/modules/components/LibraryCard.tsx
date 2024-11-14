import React, { useEffect, useRef, useState } from 'react';
import {
  Alert,
  AccessibilityInfo,
  Platform,
  useWindowDimensions,
  AppState,
  NativeEventSubscription,
} from 'react-native';
import {locales} from '../../config/locales';
import LibraryCardPortrait from './portrait/LibraryCardPortrait';
import LibraryCardLandscape from './landscape/LibraryCardLandscape';
import { setBrightnessLevel, getBrightnessLevel } from '@adrianso/react-native-device-brightness';

interface IProps {
  cardNumber: string;
  holderName?: string;
  logout: (resetBrightness: () => void) => void;
  isFocused?: boolean;
}

export const LibraryCard = ({cardNumber, holderName, logout, isFocused}: IProps) => {
  
  const [isTimeout, setIsTimeout] = useState(true)
  const [oldBrightness, setOldBrightness] = useState<number>(1);

  const appState = useRef(AppState.currentState);
  const listener: React.MutableRefObject<NativeEventSubscription | null> = useRef(null);
  
  const {width} = useWindowDimensions();

  useEffect(() => {

    AccessibilityInfo.announceForAccessibility(locales.userLoggedIn.fi);
    setTimeout(() => {
      setIsTimeout(false)
    }, 5000);

  }, [])

  useEffect(() => {

    if (Platform.OS === "android") {
      // android can handle the brightness on app state change automatically because it has separate app brightness and system brightness, 
      // therefore it does not require the app state listeners like ios does
      return;
    }

    if (!isFocused) {
      resetBrightness();
      return;
    }

    
    listener.current = AppState.addEventListener('change', (nextAppState) => {

      if (
        appState.current.match(/active/) &&
        nextAppState === 'background' || nextAppState === 'inactive'
      ) {
        setBrightnessLevel(oldBrightness);
      } else if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setBrightnessLevel(1);
      }
  
      appState.current = nextAppState;

    });

    return () => {
      resetBrightness();
    };

  }, [isFocused, oldBrightness]);

  const resetBrightness = () => {
    if (listener.current) {
      listener.current.remove()
    }
    setBrightnessLevel(oldBrightness); 
  }

  useEffect(() => {

    if (!isFocused) {
      resetBrightness();
      return;
    }

    getBrightnessLevel().then(brightness => {
      setOldBrightness(brightness);
    });

    if (Platform.OS === "android") {

      getBrightnessLevel().then(brightness => {

        /* 
          Android devices have two types of brightnesses: "system brightness" and "app brightness". 
          Only the "app brightness" can be changed from the react-native-device-brightness package.
          Since "system brightness" can override the app brightness, 
          the "app brightness" must be set to a different value every time it is changed in order for it to work.
        */
  
        const newBrightness = (brightness !== 1) ? 1 : 0.99;
        setBrightnessLevel(newBrightness);
  
      }) 

    } else {
        
        /* 
          For some reason, the `setBrightnessLevel` does not always update the brightness correctly 
          on iOS the same way it works on android, so using a "dirty hack" for fixing this.
          This is probably caused by some kind of error between React Native and the native iOS module.
        */

        setBrightnessLevel(1).then(() => {
          setBrightnessLevel(0.99)
        })

    };

  }, [isFocused, listener]);

  const confirmLogout = () => {
    Alert.alert(locales.confirmLogout.fi, '', [
      {
        text: locales.cancel.fi,
        style: 'cancel',
      },
      {text: locales.confirm.fi, onPress: () => logout(resetBrightness)},
    ]);
  };
  
  return (width > 350) ? (
    <LibraryCardPortrait
      {...{cardNumber, confirmLogout, isTimeout, holderName}}
    />
  ) : (
    <LibraryCardLandscape
      {...{cardNumber, confirmLogout, isTimeout, holderName}}
    />
  );
};
