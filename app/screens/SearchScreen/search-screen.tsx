import React, {memo, useEffect} from 'react';
import {AppHeader, Container, MovieList} from '@components';
import {colors} from '@theme';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {getSearchMoviesData, selectFetchMovieSlice} from '@services';

interface SearchScreenProps {
  navigation: any;
  route: {
    params: any;
  };
}

export const SearchScreen: any = memo((props: SearchScreenProps) => {
  const dispatch = useDispatch<any>();
  const {searchText = ''} = props?.route?.params;
  const {searchResultsData, searchResults, loadingSearchData} = useSelector(
    selectFetchMovieSlice,
    shallowEqual,
  );
  useEffect(() => {
    dispatch(getSearchMoviesData({searchText, pageNo: 1}));
  }, []);
  const onEndReached = () => {
    let pageNo = searchResults?.page + 1;
    dispatch(getSearchMoviesData({searchText, pageNo}));
  };
  return (
    <Container
      backgroundColor={colors.appBackground}
      containerStyle={{backgroundColor: colors.appBackground}}>
      <AppHeader title="Search Results" />
      <MovieList
        onEndLoad={loadingSearchData === 'pending'}
        onEndReached={
          searchResults?.page <= searchResults?.total_pages
            ? onEndReached
            : null
        }
        heading={`${searchText}.. (${searchResults?.total_results} results found)`}
        movieData={searchResultsData}
      />
    </Container>
  );
});
