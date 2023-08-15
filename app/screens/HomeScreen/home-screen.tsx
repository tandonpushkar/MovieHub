import * as React from 'react';
import {ScrollView} from 'react-native';
import {styles} from './home-screen.styles';
import {Container, CustomText} from '@components';

interface HomeScreenProps {
  navigation: any;
  route: {
    params: any;
  };
}

export const HomeScreen: any = (props: HomeScreenProps) => {
  return (
    <Container>
      <ScrollView style={styles.container}>
        <CustomText style={styles.title}>Good Evening</CustomText>
      </ScrollView>
    </Container>
  );
};
