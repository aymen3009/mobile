import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import TabNavigator from './profile'



const Testt = createAppContainer(TabNavigator);
export default class Test1 extends React.Component {
    render(){
    return (  
 
     <Testt/>
 
        ) ;
    }
}