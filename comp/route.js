import React from 'react';
import{Router, Stack, Scene}from 'react-native-router-flux';
import Login from './login';
import Sginup from './sginup';
import Test1 from './test1';
import First from './first';
import Survries from './survries'
import Elections from './elections'

export default class Route extends React.Component{
    render(){
    return(
        <Router>
    <Stack key="root" hideNavBar={true}>
      <Scene key="login" component={Login} title="Login"  />
      <Scene key="signup" component={Sginup} title="Sginup" /> 
      <Scene key="test1" component={Test1} title="Test1" initial={true}/> 
      <Scene key="first" component={First} title="First" />
      <Scene key="elections" component={Elections} title="Elections" />
      <Scene key="survries" component={Survries} title="Survries" />
    </Stack>
  </Router>
    )
    }
}