import React, {memo} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {CustomText, PosterSnippet} from '@components';
import {FlashList} from '@shopify/flash-list';
import {styles} from './movie-list.styles';

export const MovieList: any = memo(
  ({
    onEndLoad = false,
    onEndReached,
    movieData,
    heading = 'Popular Movies',
  }: any) => {
    const renderListItem = ({item, index}: any) => {
      return <PosterSnippet key={index?.toString() + 'k'} item={item} />;
    };

    const ListFooterComponent = () => {
      return (
        <ActivityIndicator
          style={{padding: 16}}
          color={'#BF0479'}
          size={'large'}
        />
      );
    };
    return (
      <View>
        <View style={styles.heading_cnt}>
          <CustomText style={styles.title}>{heading}</CustomText>
        </View>
        <View style={styles.list_top}>
          <FlashList
            onEndReachedThreshold={0.1}
            ListFooterComponent={onEndLoad ? ListFooterComponent : null}
            onEndReached={onEndReached}
            contentContainerStyle={styles.list_cnt}
            showsVerticalScrollIndicator={false}
            estimatedItemSize={200}
            data={movieData}
            ItemSeparatorComponent={() => (
              <View style={styles.item_separator} />
            )}
            renderItem={renderListItem}
          />
        </View>
      </View>
    );
  },
);
