import React from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    ActivityIndicator,
    TouchableOpacity,
    AsyncStorage,
    Text,
    TextInput,
} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import {Actions} from 'react-native-router-flux'
import Route from './route';
import {MaterialCommunityIcons} from "@expo/vector-icons";


export default class Form extends React.Component {
 
  constructor(){
      super();
      this.state={
          email:'',
          password:'',
          sec: true,
          eye: "eye-outline",
          show: false
      }
  }  
   signup(){
    Actions.signup() 
    }
    seteye() {
        if (this.state.eye !== "eye-outline") {
            this.setState({ eye: "eye-outline" })
            this.setState({sec : !this.state.sec})
        } else {
            
            this.setState({sec : !this.state.sec})
            this.setState({ eye: "eye-off-outline" })
        }
    }
  BtnLogin(){
      if (this.state.email === 'test@gmail.com' && this.state.password === 'test'){
        AsyncStorage.setItem('app_token',this.state.name);
        Actions.test1()
      }else {
          alert('check your cred')
      }
      /**let collection={}
      collection.email=this.state.email,
       collection.password=this.state.password

      var url = 'http://192.168.100.50:8001/api/add';
      fetch(url, {
          method: 'POST',
          body: JSON.stringify(collection),
          headers: new Headers({
              
              'Content-Type': 'application/json'
          })
      }).then((res) => {AsyncStorage.setItem('app_token',res.name)
    Actions.test1()})
      .catch( err => alert("Email or Passwords is not correct",err) ) */
       
  
    }

    
    render() {
        return (
           <View style={styles.container}>
               <TextInput style={styles.input } 
                placeholder="Email" 
                underlineColorAndroid='rgba(0,0,0,0)'
                autoCapitalize = "none"
                placeholderTextColor="white"
                selectionColor="white"
                onChangeText={(text) => this.setState({email : text})}
                keyboardType="email-address"
                onSubmitEditing={()=> this.password.focus()}
                />
           <View>
              <TextInput style={styles.input } 
                placeholder="Password" 
                secureTextEntry={this.state.sec}
                onChangeText={(text) => {this.setState({password : text})
                    if (text.length > 0) {
                       this.setState({show:true}) 
                    }else{
                       this.setState({show:false}) 

                    }
                  }}
                autoCapitalize = "none"
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='white'
                ref={(input)=>this.password=input}
                />
                <TouchableOpacity style={styles.addd} onPress={() => this.seteye()}>
                                <View >
                                    
                      {this.state.show && <MaterialCommunityIcons name={this.state.eye} size={30} color="#41444B" />}      
                                    
                                </View></TouchableOpacity>
  </View>

                <TouchableOpacity style={styles.buttonLogin}
                    onPress={()=>this.BtnLogin()}>
                    <Text style={styles.buttonTextLogin}>Login</Text>
                </TouchableOpacity>




         





                <TouchableOpacity style={styles.buttonForget}>
                    <Text style={styles.buttonTextForget 
                    }>PASSWORD FORGET?</Text>
                </TouchableOpacity>
           
                
                <View style = {styles.signupView}>
                <Text style={styles.textsig}>Dont't have an account yet? </Text>
                <TouchableOpacity onPress={this.signup}>
                     <Text style={styles.signupButton}>Signup
                     </Text> 
                     </TouchableOpacity>

                     </View>        
                
               </View>
         
        );
    }
}
const styles = StyleSheet.create({
    container: {
       flex:1,
        alignItems:'center',
    justifyContent:'center',
    marginTop:300
   
    },
    input:{
        width:300,
        backgroundColor:'#1E88E5',
        borderRadius:25,
        paddingHorizontal:18,
        fontSize:18,
        color:'white',
        marginVertical:10,
        paddingVertical:11
    },
    buttonLogin:{
        width:200,
        backgroundColor:'white',
        borderRadius:25,
        marginVertical:10,
        paddingVertical:11
    },
    buttonTextLogin:{
         width:200,
         fontSize:18,
        
         textAlign:'center'
    },
   buttonForget:{
    width:300,
    backgroundColor:'transparent',
    borderRadius:25,
    marginVertical:10,
    paddingVertical:11 
   },
   buttonTextForget:{
    width:300,
    left:50,
    fontWeight: "bold",
    fontSize:18,
    textAlign:'center',
    color:'white'

   },
   signupView:{
    flex:1,
    alignItems:'center',
    marginTop:100,

flexDirection:'row',
},

textsig:{
color:'white',

fontSize:18
},

 
signupButton:{
color:'white',
fontSize:18,
fontWeight: "bold",
},
addd: {
    position: "absolute",
    right: 2,
    top: 18

},
 
});