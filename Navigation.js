import React, { Component } from 'react';
import YoutubeListScreen from './YoutubeListScreen.js'
import LoginScreen from '/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Login.js'
import {createStackNavigator, createAppContainer} from 'react-navigation'

  const AppStack = createStackNavigator({
    LoginScreen: {screen: LoginScreen},
    YouTubeList: {screen: YoutubeListScreen},
  });
  
const AppContainer = createAppContainer(AppStack);

export default AppContainer;