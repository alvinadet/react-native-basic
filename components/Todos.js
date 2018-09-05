import React, { Component } from 'react';
import { Content, Text, ListItem, CheckBox, Body } from 'native-base';

export default class componentName extends Component {
  render() {
    const { id, checked, todo } = this.props.datum;
    return (
      <ListItem key={id}>
        <CheckBox checked={checked} />
        <Body>
          <Text>{todo}</Text>
        </Body>
      </ListItem>
    );
  }
}
