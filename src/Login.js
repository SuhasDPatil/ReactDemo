import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

export default class Login extends Component {
    moveToScreen = txt => {
        this.props.navigation.navigate(txt);
      }

      static navigationOptions = {
        header: null,
        };
        
  render() {
      return (
      <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: 3 }}>
        <Image style={{ height: 120, width: 120 }} source={require('/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Resources/degreeIcon.png')} />
      </View>
      <View style={{ flexDirection: 'column', flex: 4 }}>
        <View style={styles.textInputView}>
          <Image style={styles.textInputImage} source={require('/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Resources/userName.png')} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({
              username: text
            })}
            returnKeyType='next'
            onSubmitEditing={() => { this.secondTextInput.focus(); }}
            placeholder='Username / Email'
            placeholderTextColor='white'
            color='white'
          />
        </View>
        <View style={styles.textInputView}>
          <Image style={styles.textInputImage} source={require('/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Resources/userName.png')} />
          <TextInput
            style={styles.textInput}
            onChangeText={(text) => this.setState({
              password: text
            })}
            ref={(input) => { this.secondTextInput = input; }}
            returnKeyType='done'
            placeholder='Password'
            placeholderTextColor='white'
            color='white'
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={() => this.moveToScreen('YouTubeList')}>
          <Text style={[styles.instructions]}> L O G I N </Text>
        </TouchableOpacity>
        <Text style={[styles.instructions, { marginTop: 20 }]}>Forgot Password?</Text>
        <Text style={[styles.instructions, { marginTop: 20 }]}>Authenticate through Desktop?</Text>
      </View>
    </View>
    );
    }
    
    componentDidMount(){

    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4F1E41',
  },
  instructions: {
    textAlign: 'center',
    color: 'white',
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 10,
    flex: 0.8,
    marginLeft: 40,
  },
  button: {
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#511547',
    padding: 10,
    color: 'white',
    marginLeft: 40,
    marginRight: 40,
    borderColor: 'white',
    borderWidth: 0.8,
    borderRadius: 20,
  },
  textInputImage: {
    height: 40,
    width: 40,
    position: 'absolute',
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputView: {
    flexDirection: 'row',
    marginLeft: 40,
    marginRight: 40,
    marginTop: 20,
    borderColor: 'white',
    borderWidth: 0.8,
    borderRadius: 20,
  },
});
