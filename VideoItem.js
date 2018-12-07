import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
  }
}
