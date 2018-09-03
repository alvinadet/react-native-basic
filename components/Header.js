import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={style.Header}>
        <Text>HEADER</Text>
      </View>
    );
  }
}

export default Header;

const style = StyleSheet.create({
  Header: {
    flex: 0.5,
    backgroundColor: 'yellow',
    marginTop: 20
  }
});
