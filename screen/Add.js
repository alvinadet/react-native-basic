import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Root
} from 'native-base';

import { Font, AppLoading } from 'expo';

export default class componentName extends Component {
  state = {
    loading: true,
    huruf: ""
  };

  componentDidMount() {
  }
  ButtonAdd = () => {
    alert(this.state.huruf);
    this.setState({
      huruf: ""
    })
  };
  async componentWillMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    this.setState({ loading: false });
  }


  render() {
    if (this.state.loading) {
      return (
        <Root>
          <AppLoading />
        </Root>
      );
    }
    return (
      <Container>
        <Content>

          <Item floatingLabel>
            <Label>Todos</Label>
            <Input
              value={this.state.huruf}
              onChangeText={(text) => this.setState({ huruf: text })} />
          </Item>

          <Button style={{ marginTop: 10 }} onPress={() => this.ButtonAdd()}>
            <Text>Tambah</Text>
          </Button>

        </Content>
      </Container>
    );
  }
}
