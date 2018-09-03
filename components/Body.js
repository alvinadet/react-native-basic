import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class componentName extends Component {
  render() {
    return (
      <View style={style.Body}>
        <Text> Ini Body</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  Body: {
    flex: 5,
    backgroundColor: 'aqua'
  }
});
