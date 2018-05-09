import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import reducer from './reducers';
import { MainNavigator } from './navigation_config';
import UdaciStatusBar from './navigation_config/statusBar';
import { purple } from './utils/colors';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducer, {}, applyMiddleware(ReduxThunk))}>
        <View style={{ flex: 1 }}>
          <UdaciStatusBar backgroundColor={purple} barStyle="light-content" />
          <MainNavigator />
        </View>
      </Provider>
    );
  }
}
