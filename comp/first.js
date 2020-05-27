import React, { Component } from 'react'
import { Text, View, StyleSheet, ActivityIndicator, Image,AsyncStorage } from 'react-native'
import {Actions} from 'react-native-router-flux'



export default class First extends Component {
    componentDidMount(){
        AsyncStorage.getItem('app_token')
        .then(token =>{
            if (token) Actions.test1();
            else Actions.login();
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../images/logo.png')} style={
                    styles.img
                } />
                

                <ActivityIndicator size={60} />
                <Text style={styles.ltext}> Loading... </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    },
    tlogo:{
        color: "black",
        fontSize: 30,
        left : -15,
        marginTop: -25,
        marginBottom : 70,
    },
    ltext: {
        color: "black",
        fontSize: 20,
        paddingVertical: 10
    },
    img: {
        
        height: 150,
        left : -20,
        width: 200,
        justifyContent : "center",
        alignItems:"center",

    }
})