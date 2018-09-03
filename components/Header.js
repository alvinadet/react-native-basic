import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Header extends Component {
  state = {
    nama: 'alvin'
  };

  render() {
    const { color, name } = this.props;
    return (
      <View style={{ backgroundColor: color }}>
        <Text>{name}</Text>
      </View>
    );
  }
}

export default Header;
