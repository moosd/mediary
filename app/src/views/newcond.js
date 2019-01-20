import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';


export default class NewCond extends Component {

constructor(){
    super()
}

_add() {
AsyncStorage.getItem('conditions')
      .then(req => JSON.parse(req))
      .then(json => {

if(!json) { json = [] }

json.push({title: this.state.value, id: Math.random()+ ""})

AsyncStorage.setItem('conditions', JSON.stringify(json))
      .then(json => {console.log('success!')
    this.props.navigation.state.params.refresh()
    this.props.navigation.goBack()
})
      .catch(error => console.log('error!'));

})
      .catch(error => console.log('error!'));
}

render(){
return (
<View style={{flex: 1}}>
<Input placeholder='Enter description here' onChangeText={(value) => {this.setState({value: value}); console.log(value)}} />
<Button
  icon={{
    name: 'arrow-forward',
    size: 15,
    color: 'white'
  }}
  title='ADD NEW CONDITION'
  onPress={() => {this._add()}}
/>
</View>
)
}

}



