import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Header from './components/Header';
import Body from './components/Body';
class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Header />
        <Body />
      </View>
    );
  }
}

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});
