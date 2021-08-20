import { Dimensions } from 'react-native';

export const ScreenWidth = Math.round(Dimensions.get('window').width);
export const ScreenHeight = Math.round(Dimensions.get('window').height);

const MULTIPLIER = 2;

const XS = Math.min(ScreenWidth / 100, ScreenHeight / 210);
const XXS = XS / MULTIPLIER;
const XXXS = XXS / MULTIPLIER;
const S = XS * MULTIPLIER;
const M = S * MULTIPLIER;
const L = M * MULTIPLIER;
const XML = L * 1.5;
const XL = L * MULTIPLIER;
const XXML = XL * 1.5;
const XXL = XL * MULTIPLIER;
const XXXL = XXL * MULTIPLIER;

const Sizing = {
  XXXS,
  XXS,
  XS,
  S,
  M,
  L,
  XML,
  XL,
  XXML,
  XXL,
  XXXL,
} as const;

export default Sizing;
