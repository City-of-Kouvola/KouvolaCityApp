import { Dimensions } from 'react-native';

const ScreenWidth = Math.round(Dimensions.get('window').width);
const XXL = ScreenWidth * 0.09;
const XL = ScreenWidth * 0.08;
const L = ScreenWidth * 0.07;
const M = ScreenWidth * 0.06;
const S = ScreenWidth * 0.05;
const XS = ScreenWidth * 0.045;
const XXS = ScreenWidth * 0.04;
const XXXS = ScreenWidth * 0.035;

const TextSize = {
  XXXS,
  XXS,
  XS,
  S,
  M,
  L,
  XL,
  XXL,
} as const;

export default TextSize;
