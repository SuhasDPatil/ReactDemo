import React, { Component } from 'react';
import {  Text, View, TouchableOpacity, FlatList, ActivityIndicator, Dimensions, RefreshControl } from 'react-native';
import VideoItem from '/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/VideoItem.js'
const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;


export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
      isRefreshing: false
    }
  }

  static navigationOptions = {
    header: null,
    };

  getVideoList = () => {
    return fetch('https://s3-us-west-2.amazonaws.com/youtubeassets/home_num_likes.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          isRefreshing: false, 
          dataSource: responseJson,
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  pullToRefresh = () => {
    this.setState({isRefreshing : true})
    this.getVideoList()
  }
  
  render() {

    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <View style={{flex: 1}}>
        <View style={{padding : 10 ,marginTop: 20, height: 54, flexDirection: 'column', backgroundColor: '#4F1E41',alignItems:'center', width: '100%', }}>
          <TouchableOpacity style={{alignSelf:'flex-end'}} onPress={() => this.props.navigation.goBack()}>
            <Text style={{color:'white', fontSize: 18, fontWeight:'500'}}> Sign Out </Text>
          </TouchableOpacity>
        </View>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={this.state.isRefreshing}
             onRefresh={this.pullToRefresh.bind(this)} />
            }
          numColumns={aspectRatio>1.6 ? 1 : 2 }
          style={flex=1}
          showsVerticalScrollIndicator={true}
          data={this.state.dataSource}
          renderItem={({item, index}) => 
            <VideoItem youtubeItems={item} />
          }
          keyExtractor={({id}, index) => id}
        />
      </View>
    );
  }
  componentDidMount(){
    this.getVideoList()
  }
}