import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Platform, StyleSheet, View} from 'react-native';
import ReactNativeHapticFeedback from 'react-native-haptic-feedback';

import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../theme/colors';
import {ScreenNames} from '@constants';
import {HomeScreen} from '@screens';
import {ImageView} from '@components';
import {screenOption} from '@constants';
import {HapticOptions, heightToDp, normalizeFont} from '@utils';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME}
      screenOptions={screenOption}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
