import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid
} from 'react-native';

import RadioForm, {
  RadioButton, 
  RadioButtonInput, 
  RadioButtonLabel
} from 'react-native-simple-radio-button';

var hobbies = [
  {label: "Teasing", value: 1},
  {label: "Catching plate", value: 2},
  {label: "Soaking in the mud", value: 3},
];

export default class Lm  extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <RadioForm
          radio_props={hobbies}
          initial={false}
          onPress={() => {}}
          buttonSize={40}
          buttonOuterSize={60}
          selectedButtonColor={'green'}
          selectedLabelColor={'green'}
          labelStyle={{ fontSize: 20, }}
      
          formHorizontal={false}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
});