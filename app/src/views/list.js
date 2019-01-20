import React, {Component} from 'react';
import {
  Text,
  View,TouchableOpacity
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

const items = [
  { title: 'Psoriasis', css: styles.slide1, id: "1" },
  { title: 'Mole on Hand', css: styles.slide2, id: "2" },
  { title: 'Mole on leg', css: styles.slide3, id: "3" },
];


export default class Tl extends Component {


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
    {items.map(item => (
      <TouchableOpacity activeOpacity={0.9} key={Math.random()} style={item.css} onPress={() => { this.props.navigation.navigate("Timeline", {id: item.id}) }}>
        <Text style={styles.text}>{item.title}</Text>
      </TouchableOpacity>
      ))}
  </Swiper>
<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => { this.props.navigation.navigate("NewImage") }}
/>
</View>
)
  }

}


/*
<TouchableOpacity>
</TouchableOpacity>

*/
