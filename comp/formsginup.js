import React from 'react';
import {
    StyleSheet,
    KeyboardAvoidingView,
    View,
    ActivityIndicator,
    TouchableOpacity,
    Image,
    Text,
    TextInput,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {MaterialCommunityIcons} from "@expo/vector-icons";

export default class FormSginup extends React.Component {
    constructor() {
        super();
        this.state = {
            password: '',
            confirmPassword: '',
            email:'',
            cin:'',
            sec: true,
            eye: "eye-outline",
            eyec: "eye-outline",
            secc: true,
            show: false,
            showc: false,

        }
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
        seteyec() {
            if (this.state.eyec !== "eye-outline") {
                this.setState({ eyec: "eye-outline" })
                this.setState({secc : !this.state.secc})
            } else {
                
                this.setState({secc : !this.state.secc})
                this.setState({ eyec: "eye-off-outline" })
            }
        }

    
    signin(){
        Actions.login() 
        }
    submit(){
        let collection = {}
        collection.cin = this.state.cin,
        collection.email = this.state.email,
        collection.password = this.state.password
       
    var url = 'http://192.168.100.50:8001/api/add';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(collection),
        headers: new Headers({
            
            'Content-Type': 'application/json'
        })
    }).then( alert("Passwords don't match"))
    .catch( alert("Passwords don match") )
     
}
    
    handleSubmit = () => {
        const { password, confirmPassword } = this.state;
        // perform all neccassary validations
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
           ()=>this.submit()
        }
    }
    
    render() {
        return (
    
           <View style={styles.container}>
                <TextInput style={styles.input } 
                placeholder="CIN" 
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='white'
                onChangeText={(text)=>this.setState({cin:text , })}
                />
               <TextInput style={styles.input } 
                placeholder="Email" 
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='white'
                onChangeText={(text)=>this.setState({email:text , })}
                />
           <View>
              <TextInput style={styles.input } 
                placeholder="Password" 
                secureTextEntry={this.state.sec}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='white'
                onChangeText={(text) => {this.setState({password : text})
                    if (text.length > 0) {
                       this.setState({show:true}) 
                    }else{
                       this.setState({show:false}) 

                    }
                  }}
                />
                 <TouchableOpacity style={styles.addd} onPress={() => this.seteye()}>
                <View >
                    
                {this.state.show && <MaterialCommunityIcons name={this.state.eye} size={30} color="#41444B" />}
                    
                </View></TouchableOpacity>
                </View>

                <View>
                 <TextInput style={styles.input } 
                placeholder="Confirme Password" 
                secureTextEntry={this.state.secc}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholderTextColor='white'
                onChangeText={(text) => {this.setState({password : text})
                if (text.length > 0) {
                   this.setState({showc:true}) 
                }else{
                   this.setState({showc:false}) 

                }
              }}
                />
             <TouchableOpacity style={styles.addd} onPress={() => this.seteyec()}>
                                <View >
                                    
                                {this.state.showc && <MaterialCommunityIcons name={this.state.eye} size={30} color="#41444B" />}
                                    
                                </View></TouchableOpacity>
                </View>

                <TouchableOpacity style={styles.buttonCreate}
                onPress={ ()=>this.handleSubmit()}>
                    <Text style={styles.buttonTextCreate}>Create</Text>
                </TouchableOpacity>


                <View style = {styles.signupView}>
                <Text style={styles.textsig}>You alredy have an account ! </Text>
                <TouchableOpacity onPress={this.signin}>
                     <Text style={styles.signupButton}>Signin
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
    marginTop:200
   
    },
    input:{
        width:300,
        backgroundColor:'#1E88E5',
        borderRadius:25,
        paddingHorizontal:18,
        fontSize:18,
        color:'white',
        marginVertical:20,
        paddingVertical:11
    },
    buttonCreate:{
        width:200,
        backgroundColor:'white',
        borderRadius:25,
        marginVertical:20,
        paddingVertical:11
    },
    buttonTextCreate:{
         width:200,
         fontSize:18,
        
         textAlign:'center'
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
                top: 28
        
            },
            
   
 
});