import React from 'react'
import Checkbox from '@react-native-community/checkbox';
import { View } from 'native-base'
export default class Check extends React.Component{
constructor(props)
{
    super()
    this.state={
        condidate : [{
            "name":"test",
            "id":"1254",
        },
        {
            "name":"test",
            "id":"1254s",
        },
        {
            "name":"test",
            "id":"125d4",
        },
        {
            "name":"test",
            "id":"12f54",
        }],
        ids:{}



    }
    
}
change = (id)=>{
    let oid = this.state.ids.id 
    let pair = {id: !oid.id }
    let obj = this.state.ids.filter(   )

}
items = (can)=>{
    id = can.id
    let pair = {id : false }
    this.setState({ids : {...ids , ...pair}})
    return(
    <Checkbox
        key = {id}
        value={this.state.ids.id}
        onChange={this.setState({ids:{}})}
    /> )
}



render ()
    {
        return (
           <View>
               {this.state.condidate.map(element=>{
                   this.items(element);
               })}
           </View>

            
        )
    }
}