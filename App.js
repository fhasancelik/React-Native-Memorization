import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
