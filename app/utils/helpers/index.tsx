import {Dimensions, PixelRatio, Platform} from 'react-native';

export const removeClippedSubviews = Platform.OS === 'ios' ? false : true;
export const KeyExtractor: any = (item: any, index: number) =>
  'key' + index?.toString();
export const getRandomInt = (max: any) => {
  return Math.floor(Math.random() * max);
};

const {width, height} = Dimensions.get('window');

const fontToDp = (size: any) => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (width < 360) {
      return size * 0.95;
    }
    // iphone 5
    if (height < 667) {
      return size;
      // iphone 6-6s
    }
    if (height >= 667 && height <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }
  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
    }
    // Catch other weird android width sizings
    if (height < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (height >= 667 && height <= 735) {
      return size * 1.2;
    }
    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }
  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
      // Catch other smaller android height sizings
    }
    if (height < 667) {
      return size * 1.2;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }
    if (height >= 667 && height <= 735) {
      return size * 1.25;
    }
    // catch larger phablet devices
    return size * 1.4;
  }
  return size;
};

const widthToDp = (number: any) => {
  let givenWidth = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((width * givenWidth) / 100);
};

const heightToDp = (number: any) => {
  let givenHeight = typeof number === 'number' ? number : parseFloat(number);
  return PixelRatio.roundToNearestPixel((height * givenHeight) / 100);
};

export {widthToDp, heightToDp, width, height, fontToDp};

export const isIos = Platform.OS === 'ios';
export const isAndroid = Platform.OS === 'android';

export const pixelRatio = PixelRatio.getFontScale();
export const deviceWidth = Dimensions.get('screen').width;
export const deviceHeight = Dimensions.get('window').height;

export const ifNotValid = (value: any) => value == undefined || value == null;

export const ifValid = (value: any) => value != undefined && value != null;

export const ifValidNLenZ = (value: any) =>
  value != undefined && value != null && value.length === 0;

export const ifGreaterArray = (value: any) =>
  value != undefined && value != null && value.length > 0;

export const ifEmpty = (value: any) =>
  value != undefined && value != null && value == '';

export const ifNotEmpty = (value: any) =>
  value != undefined && value != null && value != '';

export const ifNValidObj = (value: any) =>
  value == undefined || value == null ? {} : value;

export const IsEmpty = (value: any) =>
  value === undefined ||
  value === null ||
  (typeof value === 'object' && Object.keys(value).length === 0) ||
  (typeof value === 'string' && value.trim().length === 0);
