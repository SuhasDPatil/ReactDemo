import React, { Component } from 'react';
import YoutubeListScreen from '/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/src/YoutubeListScreen.js'
import LoginScreen from '../src/Login.js'
import {createStackNavigator, createAppContainer} from 'react-navigation'

  const AppStack = createStackNavigator({
    LoginScreen: {screen: LoginScreen},
    YouTubeList: {screen: YoutubeListScreen},
  });
  
const AppContainer = createAppContainer(AppStack);

export default AppContainer;