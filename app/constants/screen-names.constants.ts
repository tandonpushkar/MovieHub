import {Platform} from 'react-native';
import {fontToDp, heightToDp} from '@utils';

export type ScreenTypes = {
  HOME: string;
};
export const ScreenNames: ScreenTypes = {
  HOME: 'Home',
};

export const screenOption: any = {
  //animationEnabled: false,
  animation: 'slide_from_right',
  headerShown: false,
  gestureEnabled: true,
  gestureDirection: 'horizontal',
  contentStyle: {
    backgroundColor: '#fff',
  },
};
