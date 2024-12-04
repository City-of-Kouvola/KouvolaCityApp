import React, {useState, useEffect} from 'react';
import {AccessibilityInfo} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {LibraryCard, Login} from './components';
import {locales} from '../config/locales';

export const LibraryCardModule = ({isFocused}: {isFocused?: boolean}) => {
  const [cardNumber, setCardNumber] = useState<string>('');
  const [holderName, setHolderName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const saveDetails = async (
    authCardNumber: string,
    authHolderName: string,
  ) => {
    try {
      const keyPairs = [
        ['@cardNumber', authCardNumber],
        ['@holderName', authHolderName],
      ];
      await AsyncStorage.multiSet(keyPairs);
      setCardNumber(authCardNumber);
      setHolderName(authHolderName);
    } catch (e) {
      console.log('Error saving data: ', e);
    }
  };

  const getDetails = async () => {
    try {
      const cardNumber = await AsyncStorage.getItem('@cardNumber');
      const holderName = await AsyncStorage.getItem('@holderName');
      if (cardNumber && holderName) {
        setCardNumber(cardNumber);
        setHolderName(holderName);
      }
      setIsLoading(false);
    } catch (e) {
      console.log('Error reading data: ', e);
    }
  };

  const logout = async (resetBrightness: () => void) => {
    try {
      await AsyncStorage.multiRemove(['@cardNumber', '@holderName']);
      resetBrightness();
      setCardNumber('');
      setHolderName('');
      AccessibilityInfo.announceForAccessibility(locales.userLoggedOut.fi);
    } catch (e) {
      console.log('Error removing data: ', e);
    }
  };

  useEffect(() => {

    getDetails();

  }, []);

  if (cardNumber) {
    return (
      <LibraryCard isFocused={isFocused} logout={logout} {...{cardNumber, holderName}} />
    );
  }
  if (isLoading) return <></>;

  return (
    <Login
      saveDetails={(authCardNumber, authHolderName) =>
        saveDetails(authCardNumber, authHolderName)
      }
    />
  );
};
