import {combineReducers} from 'redux';
import {REDUCERS} from '../constants';
import rootSlice from '../../navigation/root-slice';

const appReducer = combineReducers({
  [REDUCERS.ROOT]: rootSlice,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === 'USER_LOGOUT') {
    return appReducer(undefined, action);
  }
  return appReducer(state, action);
};

export default rootReducer;
