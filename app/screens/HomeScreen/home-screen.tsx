import React, {memo, useEffect, useState} from 'react';
import {ActivityIndicator, TextInput, View} from 'react-native';
import {
  Container,
  CustomText,
  CustomTouchableOpacity,
  MovieList,
} from '@components';
import {colors} from '@theme';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {ScreenNames} from '@constants';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getPopularMoviesData, selectFetchMovieSlice} from '@services';
import {styles} from './home-screen.styles';
interface HomeScreenProps {
  navigation: any;
  route: {
    params: any;
  };
}
export const HomeScreen: any = memo((props: HomeScreenProps) => {
  const dispatch = useDispatch<any>();
  const navigation: any = useNavigation();
  const [searchText, setSearchText] = useState('');
  const {popularMovies, loading} = useSelector(
    selectFetchMovieSlice,
    shallowEqual,
  );

  useEffect(() => {
    dispatch(getPopularMoviesData());
  }, []);

  const onPressSearchButton = () => {
    navigation.navigate(ScreenNames.SEARCH, {searchText});
  };

  return (
    <Container
      backgroundColor={colors.appBackground}
      containerStyle={styles.container}>
      <View style={styles.search_cnt}>
        <CustomText style={styles.title}>Search</CustomText>
      </View>
      <View style={styles.txt_input_cnt}>
        <TextInput
          value={searchText}
          onChangeText={txt => setSearchText(txt)}
          placeholderTextColor={'#fff'}
          style={styles.txt_inp}
          placeholder="type movie name.."
        />
        <CustomTouchableOpacity
          onPress={onPressSearchButton}
          style={styles.search_btn_cnt}>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={[colors.darkRed, colors.lightRed]}
            style={styles.search_btn_grd}>
            <CustomText style={styles.buttonText}>Search</CustomText>
          </LinearGradient>
        </CustomTouchableOpacity>
      </View>
      {loading === 'idle' || loading === 'pending' ? (
        <View style={styles.loader_cnt}>
          <ActivityIndicator color={colors.lightRed} size={'large'} />
        </View>
      ) : (
        <MovieList movieData={popularMovies?.results} />
      )}
    </Container>
  );
});
