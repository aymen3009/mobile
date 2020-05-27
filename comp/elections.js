import React from "react";
import { Field } from "formik";
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList, Modal, ImageBackground, AsyncStorage,TouchableOpacity } from "react-native";
import Checkbox from '@react-native-community/checkbox';
import { TextInput } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
export default class Elections extends React.Component {
    constructor() {
        super()
        this.state = {
            candidate: [],
            disabled:false,
            disabled1:false,
            err:null,
            avatar: null,
            party:'',
            bolcandidate:[],
           
            
        
        }
    }
    change = (c) =>{
        if (c.checked){
         let newcan =   this.state.candidate.map(can => {
                if (can._id == c._id){
                 can.checked = false;
                 return can
                }else{
                    return can
                }
            })
            this.setState({candidate : newcan});
        }else{
            let ch = 0;
            this.state.candidate.map(can=>{
                if(can.checked == true) ch = ch +1; 
            })
            if(ch < this.state.mvps){
                let newcan =   this.state.candidate.map(can => {
                    if (can._id == c._id){
                     can.checked = true;
                     return can
                    }else{
                        return can
                    }
                })
                this.setState({candidate : newcan});
            }else return

        }
    }
    fun= (cand)=>{
      
        return (
            cand.map(can => {
            <Checkbox  
            value ={can.checked}
            onChange={()=>this.change(cand)}
            /> 
            })
           
        );

    }

    returndata(date) {
        let re = new Date(date)
        return re.toUTCString()
    }
    //add(){
       // let url="hattp://192.168.100.50/student/addcondidate"
       // let collection={}
       // collection.party=this.state._party
       // fetch(uerl,{
        //    method:'POST',
        //    body:JSON.stringify(collection),
        //    headers: new Headers({'Content-Type':'application/json'})
       //  //}).then(res => res.json()) 
       // UXKWM00U wifipass
      
   // }
 //  delete(){
   //     let url ="http://192.168.100.50:8000/student/dnomination"
   // let student =AsyncStorage.getItem("student")
     //  let collection={}
        //    collection.id = this.props._id,
       // collection.ids=student._id
       
       // fetch(url,{
       //  method:'delete',
      //   body: JSON.stringify(collection),
      //   headers: new Headers({'Content-Type':'application/json'})
      //  }).then(res => res.json()) 
   // }
    componentDidMount(){
        this.handleRequest()
    }
    handleRequest = () => {
        let url= `http://192.168.100.50:8000/student/getcandidate/${this.props._id}`
        
        fetch(url , {
            method: 'GET',
            headers: new Headers({
                
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .then(res => {
            this.setState({candidate:res} 
                 )
            
        }).then(res => {
            res.map(element => {
               this.setState({bolcandidate: [...this.state.bolcandidate,{
                checked:false,
                condidate: element._id
            }]}) 
            })
            
        })
        .catch(err => {
            this.setState({ error : err, })
        })
    }
 renderitemres=({item})=>{
    return(
       
        <View style={{marginLeft:10,marginRight:10, backgroundColor:"white",marginTop:20,borderRadius:20}}>
           <View style={{flexDirection:"row",marginLeft:10 }}>
           <View style={{ alignSelf: "center", marginVertical: 5 }}>

<View style={styles.profileImage}>
<Image source={{ uri: this.state.avatar }} style={styles.image} resizeMode="cover"></Image>
</View>
</View>
<View style={{marginLeft:20,marginTop:10}}>
    <Text style={{fontSize:20}}>{item._name}</Text>
    <Text>Party : {item._party}</Text>
                <Text>Class :{item._classe} </Text>
                <Text>Result :</Text>
                </View>
             </View>
      </View>
    );
}
    renderitem=({item})=>{
        return(
           
            <View style={{marginLeft:10,marginRight:10, backgroundColor:"white",marginTop:20,borderRadius:20}}>
               <View style={{flexDirection:"row",marginLeft:10 }}>
               <View style={{ alignSelf: "center", marginVertical: 5 }}>

<View style={styles.profileImage}>
    <Image source={{ uri: this.state.avatar }} style={styles.image} resizeMode="cover"></Image>
</View>
</View>
<View style={{marginLeft:20,marginTop:10}}>
        <Text style={{fontSize:20}}>{item._name}</Text>
        <Text>Party : {item._party}</Text>
                    <Text>Class :{item._classe} </Text>
                    </View>
                 </View>
          </View>
        );
    }
    
   
    vote() {
        let now = new Date;

        if (((this.props._nstardate - now.getTime()) < 0) && ((this.props._nfinisdate - now.getTime() > 0))) {
      
 
 return ( <View style={{marginTop:50,justifyContent:'center',alignItems:"center",flex:1}}>
 
                <View style={{ width: 200, marginTop:100, backgroundColor: "white",borderRadius: 20, alignItems: 'center',justifyContent:'center', height:30}}>              
               <TouchableOpacity onPress={()=>this.add()}>
                <Text style={{fontSize:16}}>yatrch7</Text>
                </TouchableOpacity>
            </View>
              
                 </View>)
        }
        if (((this.props._dnstartdate - now.getTime()) < 0) && ((this.props._dnfinishdate - now.getTime() > 0))) {
            return (<View style={{marginTop:100,justifyContent:'center',alignItems:"center"}}>
            <View style={{ width: 200,  backgroundColor: "white", borderRadius: 20, alignItems: 'center',justifyContent:'center', height:30}}>
            <TouchableOpacity onPress={()=>this.delete()} >
            <Text style={{fontSize:16}}>yas7ib etrach7</Text>
            </TouchableOpacity>
        </View></View>)
        }
        if ((this.props._startdate - now.getTime()) < 0 && ((this.props._finishdate - now.getTime() > 0))) return ( 
           
                 <FlatList
                 data={this.state.candidate}
                 renderItem={this.renderitem}
                 keyExtractor={(item)=>item._id}
                 
                 
                  />

        )
        if ((this.props._dnfinishdate - now.getTime()) < 0 && (this.props._startdate - now.getTime()) > 0) {
            return (
                <FlatList
                data={this.state.candidate}
                renderItem={this.fun}
                keyExtractor={(item)=>item._id}
                
                
                 />)

        }


        if ((this.props._finishdate - now.getTime()) < 0)  return (
            <View style={styles.viewm}>
            <Text style={styles.textm}>Result : </Text>
            <Text style={styles.textp}>Number of student : </Text>
            <Text style={styles.textp}>Number of candidate :{this.state.candidate.length} </Text>
            <Text style={styles.textp}>Participant : {this.props._voters} </Text>
            <Text style={styles.textp}>Blanck pallot(s) : {this.props._blankvotes} </Text>
            <Text style={styles.textp}>Winner(s) :{this.state.candidate} </Text>
            <FlatList
           data={this.state.candidate}
           renderItem={this.renderitemres}
           keyExtractor={(item)=>item._id}
            /></View>
        )
   }

    render() {
        return ( 
           
            <ImageBackground source={require('../images/profileBackground.png')} style={styles.Bi}>
 
                <View style={{ top: 50, }}>
                    <View style={{}}>
                        <View style={{ alignItems: 'center', marginTop: 10 }}>
                            <Text style={styles.textg}> {this.props._id}</Text>
                        </View>
                        <View style={styles.viewm}>
                            <Text style={styles.textm}>Description : </Text>
                            <Text style={styles.textp}> {this.props._desc} </Text>

                            <View style={styles.viewm}>
                                <Text style={styles.textm}>Degree :</Text>
                                <Text style={styles.textp}> {this.props._degree} </Text>
                            </View>

                        </View>
                        <View style={styles.viewm} >
                            <Text style={styles.textm}>Voting schedule :</Text>
                            <Text style={styles.textp}>Strating date : {this.returndata(this.props._startdate)} </Text>
                            <Text style={styles.textp}>Finish date : {this.returndata(this.props._finishdate)} </Text>
                            <Text style={styles.textp}>Nomination strating date : {this.returndata(this.props._nstardate)} </Text>
                            <Text style={styles.textp}>Nomination finish date : {this.returndata(this.props._nfinisdate)} </Text>
                            <Text style={styles.textp}>Withdraw candidacy strating date : {this.returndata(this.props._dnstartdate)} </Text>
                            <Text style={styles.textp}>Withdraw candidacyfinish date : {this.returndata(this.props._dnfinishdate)} </Text>
                        </View>

                    </View>

                      {this.vote()}
                </View>
            </ImageBackground>

        )
    }
}
const styles = StyleSheet.create({
    Bi: {
        flex: 1,
        resizeMode: "cover",
    },
    textp: {
        marginLeft: 10,
        fontSize: 12.5,
        color: 'white'
    },
    textm: {
        fontSize: 22,
        color: 'white',

    },
    viewm: {
        marginTop: 20,
        marginLeft: 10
    },
    textg: {
        fontSize: 28,
        color: 'white',
        fontWeight: 'bold'
    },
    textbottom: {
        fontSize: 20
    },
    profileImage: {

        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: "#E1E2E6",
        alignItems: "center",
        justifyContent: "center"

    },
    image: {
        flex: 1,
        width: 200,
        height: 200,
        borderRadius: 100,


    },
    container: {
        flex:1,
         alignItems:'center',
     justifyContent:'center',
     
    
     },
     input:{
         width:300,
         backgroundColor:'transparent',
         borderRadius:25,
      
         fontSize:18,
         color:'white',
      
        
     },
       
        
       
      
      
    
});