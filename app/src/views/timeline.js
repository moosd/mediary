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

export default class Tl extends Component {

constructor(){
    super()
    this.data = [
      {time: '09:00', uri: 'https://cdn.firstcrycdn.com/2018/07/1025188561-H-1024x700.jpg'},
      {time: '10:45', uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'},
    ]
    this.state = {value: this.data.length - 1}
  }

componentDidMount = async () => {

console.log(this.props.navigation.state.params.id)
try {
const photos = await FileSystem.readDirectoryAsync( FileSystem.documentDirectory + 'photos/' + this.props.navigation.state.params.id);
console.log(photos)

} catch(err) {
this.props.navigation.navigate("NewImage", {id: this.props.navigation.state.params.id, refresh: this.update})
}
}

update() {
this.setState({update: 1})
}

render(){
    return(
<View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>

<Text style={{fontSize: 50, textAlign: 'center', marginBottom: 20}}> {this.data[this.state.value]['time']} </Text>

<Image
          style={{width: 500, height: 400}}
          source={{uri: this.data[this.state.value]['uri']}}
        />

<Slider
    value={this.data.length - 1} step={1} minimumValue={0} maximumValue={this.data.length - 1}
    onValueChange={(value) => this.setState({value})} />

<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => { this.props.navigation.navigate("NewImage", {id: this.props.navigation.state.params.id, refresh: this.update}) }}
/>
</View>
    )
}


}
