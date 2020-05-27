import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FormSginup from './formsginup';
import Background from './background';

export default class Sginup extends React.Component {
    render() {
        return (
     <Background>
         <FormSginup/>
     </Background>
        );
    }
}
