/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import { Provider } from 'react-redux';

import TabsRootContainer from './app/containers/tabsRootContainer';
import store from './app/store';


class TestUpdate extends Component {
  render() {
    return (
      <Provider store={store}>
        <TabsRootContainer />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('TestUpdate', () => TestUpdate);
