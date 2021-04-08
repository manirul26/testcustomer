import React, { Component } from 'react'
import {
  View, Badge, FooterTab, Title, Container, Footer, Header,
  Content, Card, Item, Input, CardItem, Thumbnail, Text, Button, Left, Body, Right, List,
  ListItem,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import NetInfo from "@react-native-community/netinfo";
import { StackNavigator } from 'react';
import { Icon } from 'native-base'
import { Image, ImageBackground, } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {
  StyleSheet, ActivityIndicator, FlatList, Platform, TextInput,
  TouchableOpacity, TouchableHighlight, StatusBar, Dimensions, Modal
} from 'react-native';
import { Share } from 'react-native';
//import { AdMobBanner } from 'react-native-admob';
import * as base from "./global";
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView, Linking } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { SliderBox } from "react-native-image-slider-box";
import ResponsiveImage from "react-native-responsive-image";

const width = Dimensions.get('window').width;
import { withNamespaces } from 'react-i18next';
import Spinner from 'react-native-loading-spinner-overlay';
import Swiper from 'react-native-swiper'


export class Dashboard extends Component {

  constructor(props) {
    super(props)
    //this._netwrk();

    //  this._checkuserpermission();
    this.state = {
      username: '',
      search: '',
      uid: '',
      displayName: '',
      district: null,
      searchresturent: '',
      modalVisible: false,
      isLoading: false,
    }


  }

  render() {
    //  const district = await AsyncStorage.getItem('district');
    // alert(district);
    return (
      <SafeAreaView style={styles.MainContainer}>

        <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#FFFFFF" translucent={true} />
        <View style={{ flex: 1, backgroundColor: '#FEFFFF', marginTop: 0 }}>
       
          <View style={{ height: 50, padding: 40 }}>
                <Text>Current Address</Text>
            <TouchableOpacity
             onPress={() => {
                this.props.navigation.navigate('foodlist');
              }}
              style={{ height: 50, padding: 40 }}
            >

          
                <Text>Food List </Text>
                </TouchableOpacity>
           </View>
           </View>
        <Spinner
                    visible={this.state.isLoading}
                    textContent={'Please wait loading...'}
                    textStyle={{ color: '#FFFEFD' }} />
      </SafeAreaView>

    )
  }
}


const styles = StyleSheet.create({

  MainContainer: {

    justifyContent: 'center',
    flex: 1,

  },
  image: {
    width: width * 0.5
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    padding: 20
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 5,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
    color: '#CFC7C7'
  },
  inputContainer: {
    borderColor: '#F0E7E7',
    borderWidth: 1,
    width: '98%',
    height: 45,
    marginBottom: 3,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20,
    marginLeft: 3
  },
  scrollView: {

    marginHorizontal: 5,
    height: '100%',
    flex: 1

  },
  inputs:
  {
    borderColor: 'silver', borderRadius: 10
  },
  containerimage: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: 200,
  },
  ActivityIndicator_Style: {

    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center'
  },

  GridViewBlockStyle: {

    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    height: 50,
    margin: 2,
    backgroundColor: '#F2F4F5'

  }
  ,

  GridViewInsideTextItemStyle: {

    color: '#1D2223',
    padding: 10,
    fontSize: 12,
    justifyContent: 'center',
    width: '100%'

  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 47,
    width: 47
  },

  GooglePlusStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DE8A9B',
    borderWidth: 0.5,
    borderColor: '#DE8A9B',
    height: 40,
    width: '90%',
    marginTop: -20,
    borderRadius: 15,
    margin: 5,
  },
  FacebookStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DE3C43',
    borderWidth: 0.5,
    borderColor: '#DE3C43',
    height: 40,
    width: '90%',
    marginTop: -20,
    borderRadius: 15,
    margin: 5,
  },
  ImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  TextStyle: {
    color: '#FBF7F8',
    marginBottom: 4,
    marginRight: 20,
  },
  SeparatorLine: {
    backgroundColor: '#DE3C43',
    width: 1,
    height: 40,
  },
});


export default Dashboard;