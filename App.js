import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container } from 'native-base';

import Menu from './components/Header';
import Main from './components/Body';

class App extends Component {
  render() {
    return (
      <Container>
        <Menu />
        <Main />
      </Container>
    );
  }
}

export default App;
