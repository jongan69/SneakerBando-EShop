import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Screens
import ProductContainer from './Screens/Products/ProductContainer'
import Header from './Shared/Header'

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <ProductContainer/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
