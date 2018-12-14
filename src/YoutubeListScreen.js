import React, { Component } from 'react';
import {  Text, View, TouchableOpacity, FlatList, ActivityIndicator, Dimensions, RefreshControl, Image, StyleSheet, TextInput} from 'react-native';
import VideoItem from './VideoItem.js'

const {height, width} = Dimensions.get('window'); 
const aspectRatio = height/width;

export default class App extends Component {

  constructor(props){
    super(props);
    this.state ={ isLoading: true,
      isRefreshing: false,
      backupList:[],
      dataSource:[],
      isSearchingVisible: false
    }
  }

  static navigationOptions = {
    header: null,
    };

  /**
  * In this method we call the Get All Video list API
  */ 
  getVideoList = () => {
    return fetch('https://s3-us-west-2.amazonaws.com/youtubeassets/home_num_likes.json')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          isRefreshing: false, 
          dataSource: responseJson,
          backupList: responseJson
        }, function(){
        });
      })
      .catch((error) =>{
        console.error(error);
      });
  }

  /**
  * In this method we call the load list API again for refreshing the list
  */ 
  pullToRefresh = () => {
    this.setState({isRefreshing : true})
    this.getVideoList()
  }
  
  renderHeader = () => {
    return(   
      <View style={styles.container}>
        { this.renderTextinput() }
        <TouchableOpacity style={styles.touchableStyle} onPress={() => this.setState({isSearchingVisible: !this.state.isSearchingVisible, dataSource: this.state.backupList })}>
          <Image style={styles.navImage} source={this.state.isSearchingVisible ? require( '/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Resources/cancel.png') : require( '/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Resources/search.png')} />  
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchableStyle} onPress={() => this.props.navigation.goBack()}>
          <Image style={styles.navImage} source={require('/Users/suhaspatil/Documents/reactNativeDemo/Projects/LoginDemo/Resources/logout.png')} />
        </TouchableOpacity>
      </View>
    )
  }

  cancelSearch = () => {
    if (this.state.isSearchingVisible) {
      this.setState({data: dataSource})
    } else {
      this.setState({data: backupList})
    }
  }

  renderTextinput = () => {
    if (this.state.isSearchingVisible) {
      return(
        <TextInput style={styles.serchText} placeholder='Search' placeholderTextColor='#BABABA' onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}></TextInput>
      ) 
    } 
  }

  searchFilterFunction = text => {  
    if(text==""){
      this.setState({ dataSource: this.state.backupList });  
    } else {
      const newData = this.state.dataSource.filter(item => {
        return item.title.toUpperCase().includes(text.toUpperCase())
         
      });    
      this.setState({ dataSource: newData });  
    }
  };

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
        {this.renderHeader()}
        <FlatList
          refreshControl={
            <RefreshControl refreshing={this.state.isRefreshing}
             onRefresh={this.pullToRefresh.bind(this)} />
            }
          numColumns={aspectRatio>1.6 ? 1 : 2 }
          style={flex=1}
          showsVerticalScrollIndicator={true}
          data={this.state.dataSource}
          renderItem={({item}) => 
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


const styles = StyleSheet.create({
  container: {
    // padding : 10 ,
    // marginTop: 30, 
    height: 84, 
    flexDirection: 'row', 
    backgroundColor: '#4F1E41',
    alignItems:'flex-end',
    justifyContent:'flex-end', 
    width: '100%',
  },
  navImage: {
    height: 24, 
    width: 24, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  touchableStyle:{
    flex:0.1,
    margin: 8 , 
    alignSelf:'flex-end', 
    paddingBottom: 7,
    height: 30,
    width: 30,
  },
  serchText:{
    flex:0.8, 
    alignItems:'center', 
    justifyContent:'center',
    margin: 8, 
    paddingBottom : 6, 
    color: 'white', 
    borderBottomColor: 'white', 
    borderBottomWidth: 1, 
    padding : 5 
  }
});