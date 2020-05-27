import React from "react";
import Checkbox from '@react-native-community/checkbox';
import {FlatList, Text , View} from "react-native"
export default class CH extends React.Component {
    constructor() {
        super()
        this.state = {
            candidate: [{
                "_id": "c1600712",
                "_rev": "1-73755ce4de633297cc783fdbace107be",
                "classe": "LFI3",
                "election": "election4",
                "id": "c1600712",
                "name": "hamma",
                "party": "ugte",
                "studentid": "1600712",
                "type": "vote.condidate",
                "votes": 0,
                "~version": "\u0000CgMBBAA="
              },{
                "_id": "c1600713",
                "_rev": "1-8ba5fe9a2f48dc9754ffc51c2669bc6c",
                "classe": "ARS3",
                "election": "election3",
                "id": "c1600713",
                "name": "rounda",
                "party": "uget",
                "studentid": "1600713",
                "type": "vote.condidate",
                "votes": 0,
                "~version": "\u0000CgMBBAA="
              }],
            disabled:false,
            disabled1:false,
            err:null,
            avatar: null,
            party:'',
            bolcandidate:[],
            mvps:1,
           
            
        
        }
    }
componentDidMount(){
    let newcan =   this.state.candidate.map(can => {
        can.checked = false;
        return can
    })
    this.setState({candidate : newcan});
}
change = (c,val) =>{

   { let newcan =   this.state.candidate.map(can => {
        if (can._id == c._id){
         can.checked = !val;
         return can
        }else{
            return can
        }})
        this.setState({candidate : newcan})}
    // if (!val){
    //  let newcan =   this.state.candidate.map(can => {
    //         if (can._id == c._id){
    //          can.checked = false;
    //          return can
    //         }else{
    //             return can
    //         }
    //     })
    //     this.setState({candidate : newcan});
    // }else{
    //     let ch = 0;
    //     this.state.candidate.map(can=>{
    //         if(can.checked == true) ch = ch +1; 
    //     })
    //     if(ch < this.state.mvps){
    //         let newcan =   this.state.candidate.map(can => {
    //             if (can._id == c._id){
    //              can.checked = true;
    //              return can
    //             }else{
    //                 return can
    //             }
    //         })
    //         this.setState({candidate : newcan});
    //     }else return

   // }
}
fun= (cand)=>{
  
    return (
        
        
            
        <Checkbox  
        value ={cand.checked}
        onValueChange={(val)=>this.change(cand,val)}
        /> 
        
       
    );

}
render(
){
    return(
        <View style={{ marginTop:120,alignItems:"center"}}>
            <Text>kljhklj</Text>
             {this.state.candidate.map(cand => {
                return ( <View>
                    <Checkbox  
                value ={cand.checked}
                onValueChange={(val)=>{ let newcan =   this.state.candidate.map(can => {
                    if (can._id == cand._id){
                     can.checked = !val;
                     return can
                    }else{
                        return can
                    }})
                    this.setState({candidate : newcan})}}
                />
            </View>)
             })}
             </View>
    )
}

}