import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Redux
import { Provider } from 'react-redux';
import store from './Redux/store';

// Screens
import Header from './Shared/Header'

// Navigators
import Main from './Navigators/Main'

// Turn off Error logs
LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Header/>
        <Main/>
      </NavigationContainer>
    </Provider>
  );
}

