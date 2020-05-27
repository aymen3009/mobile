import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Form from './form';
import Background from './background';

export default class Login extends React.Component {
    render() {
        return (
     <Background>
         <Form/>
     </Background>
        );
    }
}
