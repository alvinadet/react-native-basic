import React, { Component } from 'react';
import { Container } from 'native-base';

import { Main } from '../components/index';

import { Icon, Fab, View } from 'native-base';

export default class componentName extends Component {
  state = {
    number: ""
  }
  render() {
    return (
      <Container>
        <Main />
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('CreateData')}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}
