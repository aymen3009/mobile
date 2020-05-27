import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Modal, ImageBackground, AsyncStorage } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import Editprofile from './editprofile';
import { Actions } from 'react-native-router-flux'
import Background from "./background";
export default class Survries extends React.Component{
    render(){
        return(
            <View>
                <Text>hello Survries</Text>
            </View>
        )
    }
}