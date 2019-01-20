import React, {Component} from 'react';
import {
  Text,
  View,TouchableOpacity, AsyncStorage, Button
} from 'react-native';
//import Swiper from 'react-native-swiper-animated';

import Swiper from 'react-native-deck-swiper'
import ActionButton from 'react-native-action-button';

const styles = {
  wrapper: {
    backgroundColor: '#009688',
  },
  slide1: {
    backgroundColor: '#3f51b5',
    borderRadius: 20
  },
  slide2: {
    backgroundColor: '#673ab7',
    borderRadius: 20

  },
  slide3: {
    backgroundColor: '#e91e63',
    borderRadius: 20
  },
  /*text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },*/
container: {
    flex: 1,
    backgroundColor: "#F5FCFF"
  },
  card: {
    flex: 1,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: "#E8E8E8",
    justifyContent: "center",
    backgroundColor: "white",
textColor: "white"
  },
  text: {
    textAlign: "center",
    fontSize: 50,
    backgroundColor: "transparent"
  }
};

export default class Tl extends Component {


static navigationOptions = ({ navigation }) => ({
    headerRight: <Button onPress={() => navigation.navigate('Info')} title={'Medical Record'} />,
})

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
json.reverse()
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

/*render() {
return (<View style={{flex: 1}}>
  <Swiper
    style={styles.wrapper}
    paginationStyle={{ container: { backgroundColor: 'transparent' } }}
    paginationLeft={'<'}
    paginationRight={'>'}
    smoothTransition
    loop
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
}*/

render() {
return (
<View style={styles.container}>
<Swiper
          ref={swiper => {
            this.swiper = swiper
          }}
          onSwiped={() => this.onSwiped('general')}
          onSwipedLeft={() => this.onSwiped('left')}
          onSwipedRight={() => this.onSwiped('right')}
          onSwipedTop={() => this.onSwiped('top')}
          onSwipedBottom={() => this.onSwiped('bottom')}
          onTapCard={this.swipeLeft}
          cards={this.state.items}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
infinite={true}
          stackSeparation={15}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' />
        </Swiper>
<ActionButton
  buttonColor="rgba(231,76,60,1)"
  onPress={() => { this.props.navigation.navigate("NewCondition", {refresh: this.refresh}) }}
/>
</View>
)
}




  renderCard = (card, index) => {
    return (
<TouchableOpacity activeOpacity={1} key={Math.random()} style={styles.card} onPress={() => { this.props.navigation.navigate("Timeline", {id: card.id}); console.log(card.id) }}>
        <Text style={styles.text}>{card.title}</Text>
      </TouchableOpacity>
    )
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`)
  }

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true
    })
  };

  swipeLeft = () => {
    this.swiper.swipeLeft()
  };

}

/*
<TouchableOpacity>
</TouchableOpacity>

*/
