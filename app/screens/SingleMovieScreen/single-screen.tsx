import React, {memo} from 'react';
import {View} from 'react-native';
import {AppHeader, Container, CustomText, ImageViewFallback} from '@components';
import {colors} from '@theme';

import {IMAGE_BASE_URL_ORIGINAL} from '@utils';
import moment from 'moment';
import {styles} from './single-screen.styles';
interface SingleMovieProps {
  navigation: any;
  route: {
    params: any;
  };
}
export const SingleMovie: any = memo((props: SingleMovieProps) => {
  let movieItem = props?.route?.params?.movieItem || {};
  return (
    <Container
      backgroundColor={colors.appBackground}
      containerStyle={styles.container}>
      <AppHeader title={'back'} />
      <ImageViewFallback
        source={{
          uri: `${IMAGE_BASE_URL_ORIGINAL}${movieItem?.backdrop_path}`,
        }}
        resizeMode={'contain'}
        style={styles.img_style}
      />
      <View style={styles.cnt_1}>
        <CustomText style={styles.txt_2}>
          Release Date{'  '}
          <CustomText style={styles.txt_3}>
            {moment(movieItem?.release_date)?.format('DD MMM YY')}
          </CustomText>
        </CustomText>

        <CustomText style={styles.txt_2}>
          Rating{'  '}
          <CustomText style={styles.txt_4}>
            {movieItem?.vote_average?.toFixed(1)}
          </CustomText>
          /10
        </CustomText>
      </View>
      <View style={styles.cnt_2}>
        <CustomText numberOfLines={2} style={styles.title_txt}>
          {movieItem?.title}
        </CustomText>
        <CustomText style={styles.subTitle_txt}>
          {movieItem?.overview}
        </CustomText>
      </View>
    </Container>
  );
});
