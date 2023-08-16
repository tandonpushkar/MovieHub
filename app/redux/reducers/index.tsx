import {combineReducers} from 'redux';
import rootSlice from '../../navigation/root-slice';
import {reducers} from '@constants';
import {fetchMovieSlice} from '@services';
const appReducer = combineReducers({
  [reducers.ROOT]: rootSlice,
  [reducers.FETCH_MOVIE]: fetchMovieSlice.reducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
