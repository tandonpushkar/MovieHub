import {StyleSheet} from 'react-native';
import {colors, fonts} from '@theme';

export const styles = StyleSheet.create({
  search_btn_grd: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    alignSelf: 'flex-start',
    borderRadius: 20,
  },
  search_btn_cnt: {
    width: '20%',
    height: '100%',
  },
  txt_inp: {
    width: '80%',
    fontSize: 14,
    fontFamily: fonts.medium,
    color: '#fff',
  },
  txt_input_cnt: {
    paddingLeft: 16,
    borderRadius: 20,
    height: 40,
    marginHorizontal: 16,
    backgroundColor: colors.mediumGray,
    flexDirection: 'row',
  },
  search_cnt: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  container: {
    backgroundColor: colors.appBackground,
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.medium,
  },
  buttonText: {
    fontSize: 12,
    fontFamily: fonts.bold,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
  loader_cnt: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '90%',
  },
});
