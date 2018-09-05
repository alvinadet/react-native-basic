import React, { Component } from 'react';
import {
  Content,
  Text,
  ListItem,
  CheckBox,
  Body,
  List,
  Icon,
  Fab,
  View,
  Container
} from 'native-base';
import Todos from './Todos';
import { FlatList } from 'react-native';

export default class Main extends Component {
  state = {
    count: 0,
    todos: [
      {
        id: '1',
        todo: 'jalan-jalan',
        checked: true
      },
      {
        id: '2',
        todo: 'jalan-kaki',
        checked: true
      },
      {
        id: '3',
        todo: 'jalan-jongkok',
        checked: true
      }
    ]
  };

  _keyExtractor = (item, index) => item.id;

  handleInc;

  handleClick = () => {
    this.setState({
      checked: false
    });
  };

  renderRow = datum => {
    return (
      <ListItem key={datum.id}>
        <CheckBox checked={datum.checked} />
        <Body>
          <Text>{datum.todo}</Text>
        </Body>
      </ListItem>
    );
  };
  render() {
    return (
      <Container>
        <Content>
          <List>
            <FlatList
              data={this.state.todos}
              extraData={this.state}
              keyExtractor={this._keyExtractor}
              renderItem={({ item }) => <Todos datum={item} />}
            />
            {/* {this.state.todos.map((datum, key) => (
            <Todos datum={datum} key={datum.id} />
          ))} */}
          </List>
          <List>
            <Text>Banyak Data : {this.state.count} </Text>
          </List>
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.setState({ active: !this.state.active })}>
          <Icon name="add" />
        </Fab>
      </Container>
    );
  }
}

// const style = StyleSheet.create({
//   Body: {
//     flex: 5,
//     backgroundColor: 'aqua'
//   }
// });
