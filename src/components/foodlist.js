import React, { Component } from 'react'
import {
    View, Badge, FooterTab, Title, Container, Footer, Header,
    Content, Card, Item, Input, CardItem, Thumbnail, Text, Button, Left, Body, Right, List,
    ListItem,
    DeckSwiper,
} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
//import { styles } from '../styles/Styles'
import { Icon } from 'native-base'
import AsyncStorage from '@react-native-community/async-storage';
import { Alert } from 'react-native'
import { Image, ImageBackground, TextInput, SafeAreaView } from 'react-native'
//import { ListItem } from 'react-native-elements'
import FontAwesome, { Icons } from 'react-native-fontawesome';
import {
    StyleSheet, ActivityIndicator, FlatList, Platform,
    TouchableOpacity, TouchableHighlight, StatusBar, ToastAndroid
} from 'react-native';
import * as base from "./global";
import { ScrollView } from 'react-native-gesture-handler';


export class foodlist extends Component {


    constructor(props) {
        super(props)

        this.state = {
            username: '',
            isLoading: true,
            isLoadingmore: false,
            dataSource: [],
            page: 1,
            limit: 20,
        }
        this.arrayholder = [];
        // this.page = 0
        //https://www.youtube.com/watch?v=SPmhlyR_U-E
    }

    componentDidMount() {
        this.setState({ username: '' }, this._getData);
    }
  
    _getData = () => {
        const { isLoading, isLoadingmore, page, limit, dataSource } = this.state
        if (!isLoadingmore) {
            this.setState({ isLoadingmore: true }, async () => {
                // alert(district);
                // alert(this.state.distname_ban);
                fetch(base.BASE_URL + '/foodlist.php?page=' + page + '&limit=' + limit)
                    .then((response) => response.json())
                    .then((responseJson) => {

                        if (responseJson == "No Data Found") {
                            //  alert('No Data Found');
                            this.setState({
                                isLoading: false,
                                isLoadingmore: false
                            });
                            //   ToastAndroid.show('No More Data', ToastAndroid.SHORT);
                        }
                        else {
 //////////////////////////////////////////////////////////////                           
                     /*        this.setState({
                                isLoading: false,
                                isLoadingmore: false,
                                page: page + 1,
                                dataSource: [...dataSource, ...responseJson]
                            }); */
                            this.setState({
                                isLoading: false,
                                isLoadingmore: false,
                                page: page + 1,
                                dataSource: [...dataSource, ...responseJson]
                            });
///////////////////////////////////////////////////////////////
                        }
                    })
                    .catch((error) => {
                        console.error(error);
                    });


            })
        }

    }

    _renderitem = ({ item, index }) => (
        <TouchableOpacity onPress={() => this.typeSelected(item.id, item.name, item.address, item.mobileno, item.discount, item.deliveryfee)}>
            <View style={[styles.ListItem, index % 2 === 1 && { backgroundColor: '#f2f2f2' }]} >

                       
                    <Text style={{ backgroundColor: '#E3064A', color: '#FDFBFC', justifyContent: "center", alignSelf: "center", marginTop: 20 }}>
                        {item.company}
                    </Text>

          
                <Text>
                  Lat :  {item.lat}
                
                </Text>
                <Text>
                  Long :   {item.long}
                
                </Text>


            </View>
        </TouchableOpacity>

    );

    _listempty = () => (

        <View style={{ height: '100%', marginTop: '50%' }}>
            <Text style={{ justifyContent: "center", alignSelf: "center", flex: 1 }}>
                দুঃখিত কোনো সার্ভিস পাওয়া যায় নি {this.state.title}
            </Text>
            {/*    <TouchableOpacity disabled={false}
                    style={{ width: '80%', height: 40, borderRadius: 25, borderWidth: 1,
                    borderColor: 'silver', backgroundColor: 'white', padding: 10, marginTop: 15 }} 
                    disabled={false}>
                    <Text style={{ color: '#2C2C2C', textAlign: "center"}}> সব সেবা </Text>
                </TouchableOpacity > */}
        </View>
    );
    Render_Footer = () => {
        return (
            <View>
                <Text>.</Text>

            </View>
        )
    }
    handelloadmore = () => {
        this.setState({
            page: this.state.page + 1, isLoading: true
        },
            this._getData
        )
    }
    render() {
        const { themeColor, CardItemsCenter } = styles
        return (
            <SafeAreaView style={styles.container}>
                <View style={styles.scrollView}>

                    {(this.state.isLoading) ? (<ActivityIndicator size="large" color="blue" animating />)
                        :
                        (

                            <FlatList
                                data={this.state.dataSource}
                                renderItem={this._renderitem}
                                keyExtractor={(item, index) => index.toString()}
                                ListEmptyComponent={this._listempty}
                                onEndReached={() => this._getData()}
                                ListFooterComponent={this.Render_Footer}
                                onEndReachedThreshold={0.5}
                            />


                        )}
                </View>



            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdfd',
        flexDirection: 'column',
        padding: 0,
        marginTop: 40
    },
    scrollView: {
        backgroundColor: 'pink',
        marginHorizontal: 20,
    },
    MainContainer: {

        justifyContent: 'center',
        flex: 1,

    },
    ListItem: {
        flex: 1,
        borderColor: '#EC0520',
        marginTop: 5,
        borderWidth: 0.5,
        height: 150

    },
    inputIcon: {
        width: 30,
        height: 30,
        marginLeft: 10,
        justifyContent: 'center',
        color: '#b73d90'
    },
    inputContainer: {
        borderColor: '#EEE4E4',
        borderWidth: 1,
        width: '100%',
        height: 45,
        marginBottom: 3,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5
    },
    scrollView: {

        marginHorizontal: 5,

        flex: 1,

    },
    containerimage: {
        flex: 1,
        // remove width and height to override fixed static size
        width: null,
        height: '100%',
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
    Container: {
        width: 100,
        height: 100
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
    FlatList_Item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

    header_style: {

        width: '100%',
        height: 45,
        backgroundColor: '#382C7D',
        alignItems: 'center',
        justifyContent: 'center'

    },
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
    ratingText: {
        paddingLeft: 15,
        marginTop: 7,
        color: 'grey'
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
        color: '#fff',
        marginBottom: 4,
        marginRight: 20,
    },
    SeparatorLine: {
        backgroundColor: '#DE3C43',
        width: 0,
        height: 40,
    },
    item: {
        padding: 10,
    },
    separator: {
        height: 0.5,
        backgroundColor: 'rgba(0,0,0,0.4)',
    },
    text: {
        fontSize: 15,
        color: 'black',
    },
    footer: {
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    loadMoreBtn: {
        padding: 10,
        backgroundColor: '#b73d90',
        borderRadius: 4,
        fontSize: 14,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 15,
        textAlign: 'center',
    },

    TouchableOpacity_style:
    {
        padding: 7,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#b73d90',
        borderRadius: 5,
    },

    TouchableOpacity_Inside_Text:
    {
        textAlign: 'center',
        color: '#fff',
        fontSize: 18
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 80,
        borderWidth: 0,
        borderColor: "white",
        marginRight: 10,
        marginBottom: 2,
        alignSelf: 'center',
        position: 'absolute',
        marginTop: 3
    },
    footerStyle:
    {
        padding: 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderTopWidth: 2,
        borderTopColor: '#009688'
    },
    navBar: {
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    navBarTitle: {
        textAlign: 'center',
        width: '80%'
    },
    icon: {
        height: 60,
        resizeMode: 'contain',
    }
});
export default foodlist;
