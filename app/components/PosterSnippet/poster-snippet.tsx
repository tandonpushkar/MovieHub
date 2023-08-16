import React, {memo} from 'react';
import {View} from 'react-native';
import {
  CustomText,
  CustomTouchableOpacity,
  ImageViewFallback,
} from '@components';
import LinearGradient from 'react-native-linear-gradient';
import moment from 'moment';
import {styles} from './poster-snippet.styles';
import {IMAGE_BASE_URL} from '@utils';

export const PosterSnippet: any = memo(({item}: any) => {
  return (
    <View style={styles.cnt_1}>
      <View style={styles.cnt_2}>
        <ImageViewFallback
          source={{
            uri: `${IMAGE_BASE_URL}${item?.poster_path}`,
          }}
          resizeMode={'contain'}
          style={styles.img_1}
        />
      </View>
      <View style={styles.cnt_3}>
        <View>
          <CustomText numberOfLines={2} style={styles.txt_1}>
            {item?.title}
          </CustomText>
          <CustomText style={styles.txt_2}>
            Release Date{'  '}
            <CustomText style={styles.txt_3}>
              {moment(item?.release_date)?.format('DD MMM YY')}
            </CustomText>
          </CustomText>

          <CustomText style={styles.txt_2}>
            Rating{'  '}
            <CustomText style={styles.txt_4}>
              {item?.vote_average?.toFixed(1)}
            </CustomText>
            /10
          </CustomText>
        </View>

        <CustomTouchableOpacity>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#74104F', '#BF0479', '#C374FE']}
            style={styles.linearGradient}>
            <CustomText style={styles.buttonText}>View Details</CustomText>
          </LinearGradient>
        </CustomTouchableOpacity>
      </View>
    </View>
  );
});
