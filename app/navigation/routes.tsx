import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import {ScreenNames} from '@constants';
import {HomeScreen, SearchScreen, SingleMovie} from '@screens';
import {screenOption} from '@constants';

const Stack = createNativeStackNavigator();

export const MainStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={ScreenNames.HOME}
      screenOptions={screenOption}>
      <Stack.Screen name={ScreenNames.HOME} component={HomeScreen} />
      <Stack.Screen name={ScreenNames.SEARCH} component={SearchScreen} />
      <Stack.Screen name={ScreenNames.SINGLE_MOVIE} component={SingleMovie} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({});
