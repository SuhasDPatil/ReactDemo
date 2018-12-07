/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';
import NavigationStack from '/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Navigation.js'

export default class App extends Component {
  render() {
    return (
      <NavigationStack />
    );
  }

}