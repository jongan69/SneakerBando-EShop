import React from 'react';
import { LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// Screens
import Header from './Shared/Header'

// Navigators
import Main from './Navigators/Main'

// Turn off Error logs
LogBox.ignoreAllLogs(true)

export default function App() {
  return (
    <NavigationContainer>
        <Header/>
        <Main/>
    </NavigationContainer>
  );
}

