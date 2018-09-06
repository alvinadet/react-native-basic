import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';

// import { Menu } from './components/index';
// import Main from './components/Body';

import { List, Add } from './screen/index';

const App = createStackNavigator({
  Home: {
    screen: List,
    navigationOptions: {
      headerTitle: 'Todo List'
    }
  },
  CreateData: {
    screen: Add,
    navigationOptions: {
      headerTitle: 'Create Data'
    }
  }
});

export default App;
