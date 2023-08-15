import * as React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import {styles} from './app-header.styles';
import {Container, CustomTouchableOpacity, ImageView} from '@components';
import {images} from '@utils';
import {navigationRef} from '@navigation';
import {useNavigation} from '@react-navigation/native';
import {Icons} from '@assets';

interface AppHeaderProps {
  title: string;
}

export const AppHeader = (props: AppHeaderProps) => {
  const {title} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomTouchableOpacity onPress={() => navigation.goBack()}>
        <ImageView
          source={Icons.back}
          style={{height: 20, width: 20}}
          resizeMode="contain"
        />
      </CustomTouchableOpacity>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
