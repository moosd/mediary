import React, {Component} from 'react';
import {
  Text,
  View,TouchableOpacity, AsyncStorage
} from 'react-native';
import Swiper from 'react-native-swiper-animated';
import ActionButton from 'react-native-action-button';

const styles = {
  wrapper: {
    backgroundColor: '#009688',
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3f51b5',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#673ab7',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e91e63',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
};

export default class Tl extends Component {

constructor(){
super()
this.refresh = this._refresh.bind(this)
this.state = { items: [
  { title: 'Psoriasis', css: styles.slide1, id: "1" },
  { title: 'Mole on Hand', css: styles.slide2, id: "2" },
  { title: 'Mole on leg', css: styles.slide3, id: "3" },
] }
this.refresh()
}

_refresh() {
AsyncStorage.getItem('conditions')
      .then(req => JSON.parse(req))
      .then(json => { if(!json) { json = [] }
console.log(json)
var i = 0
for(var a of json) {
if(i % 3 == 1) {
a.css = styles.slide1
} else if(i % 3 == 2) {
a.css = styles.slide2
} else if (i % 3 == 0) {
a.css = styles.slide3
}
if(!(typeof a.title == "string")) { a.title = "" }
i++
}

                      this.setState({items: json})})
      .catch(error => console.log('error!'));
}

render() {
return (<View style={{flex: 1}}>
  <Swiper
    style={styles.wrapper}
    paginationStyle={{ container: { backgroundColor: 'transparent' } }}
    paginationLeft={'<'}
    paginationRight={'>'}
    smoothTransition
    loop
    stack
  >
    {this.state.items.map(item => (
      <TouchableOpacity activeOpacity={0.9} key={Math.random()} style={item.css} onPress={() => { this.props.navigation.navigate("Timeline", {id: item.id}) }}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
      ))}
  </Swiper>
<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => { this.props.navigation.navigate("NewCondition", {refresh: this.refresh}) }}
/>
</View>
)
  }

}


/*
<TouchableOpacity>
</TouchableOpacity>

*/
