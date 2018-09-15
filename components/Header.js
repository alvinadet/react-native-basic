import React, { Component } from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Title,
  connectStyle
} from 'native-base';
class HeaderTitle extends Component {
  
  render() {
    const styles = this.props.style;
   
    return (
      <Container>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}
const styles = {
  container: {
    flex: 1,
    backgroundColor: 'green',
  },
  textContent: {
    fontSize: 20,
    color: 'red',
  }
},

export default  connectStyle('', styles)(HeaderTitle)