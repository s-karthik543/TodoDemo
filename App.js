/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './src/Home';
import AddTodo from './src/AddTodo';
import { initDatabase } from './src/DatabaseHelper';
import Store from './Store';

const Routes = createStackNavigator({
  Home: {
    screen: Home
  },
  AddTodo: {
    screen: AddTodo
  }
})

const AppContainer = createAppContainer(Routes);

export default class App extends Component {

  componentDidMount() {
    initDatabase();
  }

  render() {

    return (
      <Provider store={Store}>
        <AppContainer />
      </Provider>
    )
  }
}