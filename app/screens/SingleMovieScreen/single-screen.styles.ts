import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

export const styles = StyleSheet.create({
  subTitle_txt: {
    lineHeight: 20,
    fontFamily: fonts.medium,
    color: colors.mediumGray,
    fontSize: 16,
  },
  title_txt: {
    lineHeight: 28,
    fontFamily: fonts.medium,
    color: colors.white,
    fontSize: 24,
  },
  cnt_2: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  cnt_1: {
    marginTop: 8,
    paddingHorizontal: 16,
  },
  img_style: {
    width: '100%',
    height: 250,
  },

  container: {
    backgroundColor: colors.appBackground,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.medium,
  },

  txt_4: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.white,
  },
  txt_3: {
    fontFamily: fonts.bold,
    fontSize: 14,
    color: colors.white,
  },
  txt_2: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.mediumGray,
  },
});
