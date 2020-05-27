import React from 'react' ;

import {Image,StyleSheet,ImageBackground} from 'react-native';


export default class Background  extends React.Component {
    render(){ return(
<ImageBackground style={styles.container} source={require('../images/wallpaper.png')}>
    {this.props.children}
    </ImageBackground>
    );}
}
const styles = StyleSheet.create({
    container : {
        flex: 1,
    resizeMode: "cover",
    justifyContent: "center"

        
    }})
   
    