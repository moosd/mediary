import React, { Component } from 'react';
import Timeline from 'react-native-timeline-listview'
import ActionButton from 'react-native-action-button';
import {
  StyleSheet,
  Text, TouchableOpacity,
  View, ScrollView,Image,
  FlatList, Button
} from 'react-native';
import { Slider } from 'react-native-elements'

import { FileSystem, FaceDetector, MediaLibrary, Permissions } from 'expo';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Tl extends Component {

constructor(){
    super()
    this.state = {value: -1, data: []}
    this.update = this._update.bind(this)
  }

pad(number, length) {
   
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
   
    return str;

}

timeConverter(UNIX_timestamp){
  var a = new Date(UNIX_timestamp);
  var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = this.pad(a.getDate(), 2);
  var hour = this.pad(a.getHours(), 2);
  var min = this.pad(a.getMinutes(), 2);
  var sec = this.pad(a.getSeconds(), 2);
  var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
  return time;
}

componentDidMount = async () => {

console.log(this.props.navigation.state.params.id)
try {
var photos = await FileSystem.readDirectoryAsync( FileSystem.documentDirectory + 'photos/' + this.props.navigation.state.params.id);
console.log(photos)
photos.sort()
data = []

for(var p of photos) {
data.push({time: this.timeConverter(parseInt(p.split(".")[0])), uri:  FileSystem.documentDirectory + 'photos/' + this.props.navigation.state.params.id + "/" + p})
}
this.setState({value: data.length - 1, data: data})

} catch(err) {
this.props.navigation.navigate("NewImage", {id: this.props.navigation.state.params.id, refresh: this.update})
}
}

_update() {
this.setState({update: 1})
this.componentDidMount()
}

render(){
    return(
<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>

<Text style={{fontSize: 50, textAlign: 'center', marginBottom: 20}}> {this.state.value > -1 ? this.state.data[this.state.value]['time'] : ''} </Text>

<Image
          style={{width: 300, height: 300}}
          source={{uri: this.state.value > -1 ? this.state.data[this.state.value]['uri'] : 'https://i.imgur.com/1PwyP45.jpg'}}
        />

{this.state.value > -1 && this.state.data.length > 1 ?
<Slider
    value={this.state.data.length - 1} step={1} minimumValue={0} maximumValue={this.state.data.length - 1} style={{ width: 400 }}
    onValueChange={(value) => this.setState({value})} />
: <View />}

<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => { this.props.navigation.navigate("NewImage", {id: this.props.navigation.state.params.id, refresh: this.update}) }}
renderIcon={() => { return (<Icon name="ios-camera" style={{fontSize: 20,
    height: 22,
    color: 'white'}} />
) } }

/>
</View>
    )
}


}
