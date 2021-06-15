import { StyleSheet, Platform } from 'react-native';

const HeaderFont =
  Platform.OS === 'ios' ? 'GT Pressura Mono LC' : 'GT-Pressura-Mono-LC-Bold';
const textFont = 'Roboto';

export const styles = StyleSheet.create({
  headerText: {
    fontFamily: HeaderFont,
    fontSize: 24,
    textAlign: 'center',
  },
});
