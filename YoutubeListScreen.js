import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, ActivityIndicator, Platform, Dimensions, RefreshControl } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
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
            // <VidoeITem
            //   title={item.data}
            // />
            <View style={{ flex: 1, margin: 3 }}>
              <Image style={[styles.thumbnailImage, {height:200}]} source={{uri:item.thumbnail_image_name}} /> 
              <View style={{alignContent:'center', flex: 1, margin: 3, flexDirection: 'row' }}>
                <Image style={{ height: 40, width: 40, margin: 3, borderRadius: 20}} source={{uri:item.channel.profile_image_name}} /> 
                <View style={{ flex: 0.9, margin: 3 }}>
                  <Text style={styles.titleText}>{item.title}</Text>
                  <Text style={{padding:5,height: 25,}}>{item.channel.name}</Text>
                </View>
              </View>
          </View>
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