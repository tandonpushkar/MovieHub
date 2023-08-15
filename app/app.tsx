import React, {useEffect} from 'react';
import Navigator from './navigation/navigator';
import {Provider} from 'react-redux';

import Toast from 'react-native-toast-message';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {store} from './redux/store';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
const persistedStore = persistStore(store);

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate persistor={persistedStore} loading={null}>
          <Navigator />
          <Toast />
        </PersistGate>
      </Provider>
    </GestureHandlerRootView>
  );
};
//export default withCodePush(App);
export default App;
