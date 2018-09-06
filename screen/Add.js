import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text
} from 'native-base';
import { View } from 'react-native';

export default class componentName extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Todos</Label>
              <Input />
            </Item>

            <Button>
              <Text>Click Me!</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}
