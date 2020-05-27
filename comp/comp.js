import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Touchable,
    TouchableOpacity
  } from 'react-native';

 export default class Test extends React.Component {
    
    constructor() {
        super();
        this.state={
            name:'',
            bdate:'',
            cin:'',
            id:'',
            classe:'',
            degree:'',
            cind:''
        }

    }
    updatev(text , field){
        if (field == 'name') {
            this.setState({
                name:text,
            })
        }
        else if (field == 'bdate') {
            this.setState({
                bdate:text,
            })
        }
        else if (field == 'id') {
            this.setState({
                id:text,
            })
        }
        else if (field == 'cin') {
            this.setState({
                cin:text,
            })
        }
        else if (field == 'classe') {
            this.setState({
                classe:text,
            })
        }
        else if (field == 'degree') {
            this.setState({
                degree:text,
            })
        }
        else if (field == 'cind') {
            this.setState({
                cind:text,
            })
        }
    }
    submit(){
        let collection = {}
        collection.name = this.state.name,
        collection.bdate = this.state.bdate,
        collection.id = this.state.id,
        collection.classe= this.state.classe,
        collection.degree= this.state.degree,
        collection.cin = this.state.cin,
        collection.cind = this.state.cind
        console.warn(collection);

        var url = 'http://192.168.100.50:8000/student/create';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(collection),
            headers: new Headers({
                
                'Content-Type': 'application/json'
            })
        }).then(res => res.json())
        .catch(error => console.error('eeee:  ' ,error) )
        .then(response => console.log('suc :' ,response)); 
    }
 render(){return (
            <View>
                <TextInput style={style.txt} onChangeText={(text) => this.updatev(text, 'name')}
                    placeholder="Name"></TextInput>
                <TextInput style={style.txt} onChangeText={(text) => this.updatev(text, 'bdate')}
                    placeholder="bdate"></TextInput>
                <TextInput style={style.txt} onChangeText={(text) => this.updatev(text, 'cin')}
                    placeholder="cin"></TextInput>
                <TextInput style={style.txt} onChangeText={(text) => this.updatev(text, 'id')}
                    placeholder="id"></TextInput>
                <TextInput style={style.txt} onChangeText={(text) => this.updatev(text, 'classe')}
                    placeholder="class"></TextInput>
                <TextInput style={style.txt} onChangeText={(text) => this.updatev(text, 'degree')}
                    placeholder="degree"></TextInput>
                <TextInput style={style.txt} onChangeText={(text) => this.updatev(text, 'cind')}
                    placeholder="cind"></TextInput>
                <TouchableOpacity style={style.btn}
                onPress= {()=> this.submit()}>
                    <Text> Submit </Text>
                </TouchableOpacity>
            </View>

        );}
    
}

const style = StyleSheet.create({
    reg: {
        alignSelf: 'stretch',
    },
    txt: {
        marginTop : 30,
        marginLeft : 60,
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        borderBottomColor: '#f8f8f8f8',
        borderBottomWidth: 1
    },
    btn: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        marginTop: 30
    },
    

})
