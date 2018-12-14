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
        <Image style={[styles.thumbnailImage, {height:200}]} source={{uri:youtubeItem.thumbnail_image_name}} /> 
        <View style={{alignContent:'center', flex: 1, margin: 3, flexDirection: 'row' }}>
          <Image style={{ height: 40, width: 40, margin: 3, borderRadius: 20}} source={{uri:youtubeItem.channel.profile_image_name}} /> 
         <View style={{ flex: 0.9, margin: 3 }}>
            <Text style={styles.titleText}>{youtubeItem.title}</Text>
            <Text style={{padding:5,height: 25,}}>{youtubeItem.channel.name}</Text>
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
    // height: aspectRatio>1.6 ? 200 : 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    padding:5,
    height: 25,
    fontWeight:'bold',
  },
});