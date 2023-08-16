import {createSlice, createSelector, createAsyncThunk} from '@reduxjs/toolkit';
import {reducers} from '@constants';
import {authAxios} from '@utils';

interface FetchMovieSlice {
  popularMovies: {};
  searchResults: {};
  searchResultsData: [];
  loading: 'idle' | 'pending' | 'succeeded' | 'failed';
  loadingSearchData: 'idle' | 'pending' | 'succeeded' | 'failed';
}

export const getPopularMoviesData = createAsyncThunk(
  `${reducers.FETCH_MOVIE}/getPopularMoviesData`,
  async (_, {dispatch, getState, rejectWithValue}) => {
    try {
      const response = await authAxios.get(
        'movie/popular?language=en-US&page=1',
      ); //where you want to fetch data
      return await response.data;
    } catch (error) {
      console.warn('Error124', error);
      return rejectWithValue({error: error});
    }
  },
);

export const getSearchMoviesData = createAsyncThunk(
  `${reducers.FETCH_MOVIE}/getSearchMoviesData`,
  async (
    {searchText, pageNo}: any,
    {dispatch, getState, rejectWithValue}: any,
  ) => {
    try {
      let link = `search/movie?query=${searchText}&include_adult=false&language=en-US&page=${pageNo}`;
      const response = await authAxios.get(link); //where you want to fetch data
      return await response.data;
    } catch (error) {
      console.warn('Error124', error);
      return rejectWithValue({error: error});
    }
  },
);

const initialState = {
  popularMovies: {},
  searchResults: {},
  searchResultsData: [],
  loading: 'idle',
  loadingSearchData: 'idle',
} as FetchMovieSlice;

export const fetchMovieSlice = createSlice({
  name: reducers.FETCH_MOVIE,
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getPopularMoviesData.pending, (state, action) => {
      state.loading = 'pending';
    });
    builder.addCase(getPopularMoviesData.fulfilled, (state, action) => {
      state.popularMovies = action.payload;
      state.loading = 'succeeded';
    });
    builder.addCase(getPopularMoviesData.rejected, (state, action) => {
      state.loading = 'failed';
    });
    builder.addCase(getSearchMoviesData.pending, (state, action) => {
      state.loadingSearchData = 'pending';
    });
    builder.addCase(getSearchMoviesData.fulfilled, (state, action) => {
      let mergedResult: any =
        action?.payload?.page === 1
          ? action?.payload?.results
          : [...state.searchResultsData, ...action?.payload?.results];
      state.searchResults = action?.payload;
      state.searchResultsData = mergedResult;
      state.loadingSearchData = 'succeeded';
    });
    builder.addCase(getSearchMoviesData.rejected, (state, action) => {
      state.loadingSearchData = 'failed';
    });
  },
});

export const selectFetchMovieSlice = createSelector(
  (state: any) => ({
    popularMovies: state[reducers.FETCH_MOVIE].popularMovies,
    searchResults: state[reducers.FETCH_MOVIE].searchResults,
    searchResultsData: state[reducers.FETCH_MOVIE].searchResultsData,
    loading: state[reducers.FETCH_MOVIE].loading,
    loadingSearchData: state[reducers.FETCH_MOVIE].loadingSearchData,
  }),
  state => state,
);
