
import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView, Modal, ImageBackground, AsyncStorage } from "react-native";
import { Ionicons, SimpleLineIcons, FontAwesome5, AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as ImagePicker from 'expo-image-picker';
import Editprofile from './editprofile';
import { Actions } from 'react-native-router-flux'

export default class Xxx extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "Hamma ",
            avatar: null,
            show: false


        }
    }
inverseshow=()=>{
    this.setState({show: !this.state.show})
}

    openImagePickerAsync = async () => {
        let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

        if (permissionResult.granted === false) {
            alert("Permission to access camera roll is required!");
            return;
        }

        let pickerResult = await ImagePicker.launchImageLibraryAsync({


            allowsEditing: true,

        });
        this.setState({ avatar: pickerResult.uri })
    }
    setlogout() {
        AsyncStorage.removeItem('app_token').then(
            Actions.login());
    }



    render() {
        return (

            <SafeAreaView style={styles.container}>
                <ImageBackground source={require('../images/profileBackground.png')} style={styles.Bi}>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={{ alignSelf: "center", marginTop: 70 }}>

                            <View style={styles.profileImage}>
                                <Image source={{ uri: this.state.avatar }} style={styles.image} resizeMode="cover"></Image>
                            </View>
                        </View>


                        <View style={styles.add}>
                            <TouchableOpacity onPress={this.openImagePickerAsync}  >
                                <Ionicons name="ios-add" size={40} color="white" style={{
                                    alignItems: "center",
                                    justifyContent: "center"
                                }}></Ionicons>
                            </TouchableOpacity>
                        </View>



                        <View style={styles.infoContainer}>
                            <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{this.state.username}</Text>

                        </View>


                        <View style={styles.bEditeV}>
                            <TouchableOpacity style={styles.bEdite} onPress={() => this.inverseshow()}>
                                <View style={styles.addd}>
                                    <FontAwesome5 name="user-edit" size={40} color="#42a5f5" ></FontAwesome5>
                                </View>
                                <Text style={styles.bEditeT}>Edit Profile</Text>
                            </TouchableOpacity>
                        </View>


                        <View style={styles.blogoutV}>
                            <TouchableOpacity style={styles.bLogout} onPress={() => this.setlogout()}>
                                <View style={styles.adddd}>

                                    <SimpleLineIcons name="logout" size={40} color="#42a5f5" ></SimpleLineIcons>

                                </View>
                                <Text style={styles.bEditeT}>Logout</Text>
                            </TouchableOpacity>

                        </View>




                    </ScrollView>
                </ImageBackground>
                <Editprofile show={this.state.show} inverseshow={()=>this.inverseshow()}/>
            </SafeAreaView>

        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,

        backgroundColor: "#fff"
    },
    Bi: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    text: {
        fontSize: 18,
        color: "#fff"
    },
    image: {
        flex: 1,
        width: 200,
        height: 200,
        borderRadius: 100,


    },
    profileImage: {

        width: 200,
        height: 200,
        borderRadius: 100,
        backgroundColor: "#E1E2E6",
        alignItems: "center",
        justifyContent: "center"

    },
    add: {
        backgroundColor: "#42a5f5",
        position: "absolute",
        left: 270,
        top: 100,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    bEditeV: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 70
    },
    bEdite: {
        width: 300,
        backgroundColor: 'white',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 11
    },
    bEditeT: {
        color: '#000',
        fontSize: 16,
        alignSelf: "center",
        alignItems: "center",
    },
    bLogout: {
        width: 200,
        backgroundColor: 'white',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 11
    },
    blogoutV: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 200

    },
    addd: {
        backgroundColor: "transparent",
        position: "absolute",
        left: 10,
        top: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center"
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

});