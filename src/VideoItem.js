import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class VideoItem extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true}
  }

  render() {
    let youtubeItem=this.props.youtubeItems;
    console.log("youtubeItem",youtubeItem)
    return(
      <View style={{ flex: 1, margin: 3 }}>
        <Image style={styles.thumbnailImage} source={{uri:youtubeItem.thumbnail_image_name}} /> 
        <View style={styles.bottomView}>
          <Image style={styles.singerImage} source={{uri:youtubeItem.channel.profile_image_name}} /> 
          <View style={{ flex: 0.9, margin: 3 }}>
            <Text style={styles.titleText}>{youtubeItem.title}</Text>
            <Text style={styles.channelNameText}>{youtubeItem.channel.name}</Text>
          </View>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  flatview: {
    padding: 10,
    justifyContent: 'center',
    height: 300,
  },
  thumbnailImage: {
    padding:10,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    padding:5,
    height: 25,
    fontWeight:'bold',
  },
  singerImage: {
    height: 40, 
    width: 40, 
    margin: 3, 
    borderRadius: 20
  },
  channelNameText: {
    padding:5,
    height: 25,
  },
  bottomView: {
    alignContent:'center', 
    flex: 1, 
    margin: 3, 
    flexDirection: 'row' 
  },
});