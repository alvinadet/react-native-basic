import React, { Component } from 'react';
import { Header, Body, Title } from 'native-base';

class Menu extends Component {
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
  }
  render() {
    return (
      <Header>
        <Body>
          <Title style={{ fontFamily: 'Roboto_medium' }}>To Do List</Title>
        </Body>
      </Header>
    );
  }
}

export default Menu;

// const style = StyleSheet.create({
//   Header: {
//     flex: 0.5,
//     backgroundColor: 'yellow',
//     marginTop: 20
//   }
// });
