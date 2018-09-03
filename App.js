import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Header from './components/Header';

export default class App extends Component {
  Tekan = () => {
    alert('oke');
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{ backgroundColor: '#D0D0D0', padding: 15 }}>
          <TouchableOpacity
            onPress={() => {
              this.Tekan();
            }}>
            <Text> Click ME!</Text>
          </TouchableOpacity>
        </View>
        <Text>Alvin Adetya dan Oke</Text>
        <Header color="yellow" name="hallo react native" />
        <Header color="red" name="hallo" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
