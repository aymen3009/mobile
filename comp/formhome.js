import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Modal, ImageBackground, AsyncStorage } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity, ScrollView } from "react-native-gesture-handler";

import { Actions } from 'react-native-router-flux'



export default class Formhome extends React.Component {

constructor(){
    super()
    this.state = {
        
        data:[],
        refreching : false,
        error : null,
        loading : false
        
    }
}
componentDidMount(){
    this.fetch();
}
refrech = ()=>{
    this.setState({refreching : true},()=> this.fetch())
}
fetch = () => {
    let url= "http://192.168.100.50:8000/student/getallElection"
    this.setState({loading : true})
    fetch(url , {
        method: 'GET',
        headers: new Headers({
            
            'Content-Type': 'application/json'
        })
    }).then(res => res.json())
    .then(res => {
        this.setState({data:res, loading : false , refreching : false}  )
        
    })
    .catch(err => {
        this.setState({loading : false, error : err, refreching : false})
    })
}
title(item){
    if(item._type==="vote.election")
 Actions.elections(item)
 else Actions.survries(item)       
}
getcolor(item){
    let now = new Date;


    if((item._startdate - now.getTime()) > 0 ) return "#c7cc00"
    if ((item._finishdate - now.getTime()) <0 ) return "red" 
    return "green"
}
gettext(item){
    let now = new Date;

    if((item._startdate - now.getTime()) > 0 ) return "not yet"
    if ((item._finishdate - now.getTime()) <0 ) return "finished" 
    return "in progress"
}
renderitem=({item})=>{
    return(
       
        <View style={{marginLeft:10,marginRight:10, backgroundColor:"white",marginTop:10,borderRadius:20}}>
           <View style={{justifyContent:"space-around" ,flexDirection:"row", marginTop:10}}>
               <TouchableOpacity   onPress={() => this.title(item)} >
               <Text style={{fontSize:18,}}>{item._id}</Text>
             </TouchableOpacity>
             <View style={{justifyContent:'center',alignItems:'center',marginLeft:160,marginTop:-10}}>
             <Entypo name="dot-single" size={40} color={this.getcolor(item)}   />
    <Text style={{fontSize:12,marginTop:-16,}}>{this.gettext(item)}</Text>
             </View>
             
             
                 
             </View>
             <View style={{borderBottomColor: 'black',
    borderBottomWidth: 2,width:"70%",marginLeft:10}}></View>
             <ScrollView style={{marginVertical:10,marginLeft:10,marginRight:10}}>
             <Text style={{fontSize:14,}}>
           
               {item._desc}
             </Text>
             </ScrollView>
      </View>
    );
}

    render() {
        return (
           
           
            <ImageBackground source={require('../images/profileBackground.png')} style={styles.Bi}>
          
                <View style={{top:50 }}>
            
           <FlatList
           data={this.state.data.reverse()}
           renderItem={this.renderitem}
           keyExtractor={(item)=>item._id}
           refreshing = {this.state.refreching}
           onRefresh = {this.refrech}
           
            />
          
           </View>
          
            </ImageBackground>        
            
       
            
        );
    }
}
const styles = StyleSheet.create({
       Bi: {
        flex: 1,
        resizeMode: "cover",
        
    }

});