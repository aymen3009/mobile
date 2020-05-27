import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    StyleSheet,
    Modal,
    TextInput
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { ThemeConsumer } from "react-native-elements";

export default class Editprofile extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            password: '',
            newpassword: '',
            cnewpassword: '',
            
            eye: "eye-outline",
            sec: true,
            eyenew: "eye-outline",
            secnew: true,
            eyenewc: "eye-outline",
            secnewc: true,
            showw: false,
            showwn: false,
            showwnc: false

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
    seteyenew() {
        if (this.state.eyenew !== "eye-outline") {
            this.setState({ eyenew: "eye-outline" })
            this.setState({secnew : !this.state.secnew})
        } else {
            
            this.setState({secnew : !this.state.secnew})
            this.setState({ eyenew: "eye-off-outline" })
        }
    }
    seteyenewc() {
        if (this.state.eyenewc !== "eye-outline") {
            this.setState({ eyenewc: "eye-outline" })
            this.setState({secnewc : !this.state.secnewc})
        } else {
            
            this.setState({secnewc : !this.state.secnewc})
            this.setState({ eyenewc: "eye-off-outline" })
        }
    }

    save() {
        if (!this.state.password || !this.state.newpassword) {
            return alert("Password can't be empty")
        }
        if (this.state.newpassword !== this.state.cnewpassword) {
            return alert("The password does not match")
        }
        let collection = {}

        collection.password = this.state.password
        collection.newpassword = this.state.newpassword


        var url = 'http://192.168.100.50:8001/api/user/';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(collection),
            headers: new Headers({

                'Content-Type': 'application/json'
            })
        }).then((res) => this.setState({ show: false }))
            .catch(err => alert(`Password does `))
    }


    render() {
        return (


            <Modal
                transparent={true}
                visible={this.props.show || false}>
                <View style={{ backgroundColor: "#000000aa", flex: 1, }}>
                    <View style={{ backgroundColor: "white", flex: 1, margin: 50, padding: 10, borderRadius: 10 }} >
                        <View>
                        <TouchableOpacity  onPress={() => this.props.inverseshow()}> 
                        <AntDesign name="leftcircleo" size={40} color="#42a5f5" ></AntDesign>
                        </TouchableOpacity>       
                
                            <View>
                                <TextInput style={styles.input}
                                    placeholder="Password"
                                    secureTextEntry={this.state.sec}
                                    onChangeText={(text) => {this.setState({password : text})
                    if (text.length > 0) {
                       this.setState({showw:true}) 
                    }else{
                       this.setState({showw:false}) 

                    }
                  }}
                                    autoCapitalize="none"
                                    placeholderTextColor='white'
                                    onSubmitEditing={() => this.cpassword.focus()} />
                               <TouchableOpacity style={styles.addd} onPress={() => this.seteye()}>
                                <View >
                                    
                                {this.state.showw && <MaterialCommunityIcons name={this.state.eye} size={40} color="white" />}
                                    
                                </View></TouchableOpacity>
                            </View>



                                 <View>
                             <TextInput style={styles.input}
                                placeholder="New Password"
                                secureTextEntry={this.state.secnew}
                                onChangeText={(text) => {this.setState({password : text})
                    if (text.length > 0) {
                       this.setState({showwn:true}) 
                    }else{
                       this.setState({showwn:false}) 

                    }
                  }}
                                autoCapitalize="none"
                                placeholderTextColor='white'
                                ref={(input) => this.cpassword = input}
                                onSubmitEditing={() => this.password.focus()} />
                                <TouchableOpacity style={styles.addd} onPress={() => this.seteyenew()}>
                                <View >
                                    
                                {this.state.showwn && <MaterialCommunityIcons name={this.state.eyenew} size={40} color="white" />}
                                    
                                </View></TouchableOpacity>
                            </View>
                             <View>
                            <TextInput style={styles.input}
                                placeholder="Confirm New Password"
                                secureTextEntry={this.state.secnewc}
                                onChangeText={(text) => {this.setState({password : text})
                                if (text.length > 0) {
                                   this.setState({showwnc:true}) 
                                }else{
                                   this.setState({showwnc:false}) 
            
                                }
                              }}
                                autoCapitalize="none"
                                placeholderTextColor='white'
                                ref={(input) => this.password = input} />
                                
                                <TouchableOpacity style={styles.addd} onPress={() => this.seteyenewc()}>
                                <View >
                                    
                                {this.state.showwnc && <MaterialCommunityIcons name={this.state.eyenewc} size={40} color="white" />}
                                    
                                </View></TouchableOpacity>
                                </View>


                        </View>

                        <View style={styles.blogoutV}>
                            <TouchableOpacity style={styles.bLogout} onPress={() => this.save()}>
                                <View style={styles.adddd}>

                                    <AntDesign name="checkcircleo" size={40} color="white" ></AntDesign>

                                </View>
                                <Text style={styles.bEditeT}>Save</Text>
                            </TouchableOpacity>

                        </View>
                    </View>

                </View>


            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    blogoutV: {
        alignSelf: "center",
        alignItems: "center",
        flex: 1,
        justifyContent: 'flex-end'

    },
    bLogout: {
        width: 200,
        backgroundColor: '#42a5f5',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 11
    },
    adddd: {
        backgroundColor: "transparent",
        position: "absolute",
        left: 5,
        top: 2,

        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    bEditeT: {
        color: 'white',
        fontSize: 18,
        alignSelf: "center",
        alignItems: "center",
    },
    input: {
        width: 300,
        backgroundColor: '#1E88E5',
        borderRadius: 25,
        paddingHorizontal: 18,
        fontSize: 18,
        color: 'white',
        marginVertical: 10,
        paddingVertical: 11
    },
    addd: {
        position: "absolute",
        right: 2,
        top: 12

    }
});
