import React from 'react';
import { registerRootComponent, AppLoading, Asset, Font } from 'expo';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { View, Image, Dimensions } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import Components from './src/drawer/components';
import Ratings from './src/drawer/ratings';
import Pricing from './src/drawer/pricing';
import Login from './src/drawer/login';
import Profile from './src/drawer/profile';
import Settings from './src/drawer/settings';

import {StackNavigator} from 'react-navigation';
import { AsyncStorage } from "react-native"


import Lists from './src/views/list';
import Timeline from './src/views/timeline';
import Camera from './src/views/camera';
import NewCond from './src/views/newcond';
import Info from './src/views/info';


const SCREEN_WIDTH = Dimensions.get('window').width;

const CustomDrawerContentComponent = props => (
  <View style={{ flex: 1, backgroundColor: '#43484d' }}>
    <View
      style={{ marginTop: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <Image
        source={require('./src/images/logo.png')}
        style={{ width: SCREEN_WIDTH * 0.57 }}
        resizeMode="contain"
      />
    </View>
    <View style={{ marginLeft: 10 }}>
      <DrawerItems {...props} />

    </View>
  </View>
);

const App = StackNavigator({
  Login: {screen: Login},
  List: {screen: Lists},
  Timeline: {screen: Timeline},
  NewCondition: {screen: NewCond},
  NewImage: {screen: Camera},
  Info: {screen: Info},
},
  {
    initialRouteName: "Login",
  });

function cacheImages(images) {
  return images.map(image => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts) {
  return fonts.map(font => Font.loadAsync(font));
}

export default class AppContainer extends React.Component {
  state = {
    isReady: false,
  };

  async _loadAssetsAsync() {
    const imageAssets = cacheImages([
      require('./assets/images/bg_screen1.jpg'),
      require('./assets/images/bg_screen2.jpg'),
      require('./assets/images/bg_screen3.jpg'),
      require('./assets/images/bg_screen4.jpg'),
      require('./assets/images/user-cool.png'),
      require('./assets/images/user-hp.png'),
      require('./assets/images/user-student.png'),
      require('./assets/images/avatar1.jpg'),
    ]);

    const fontAssets = cacheFonts([FontAwesome.font, Ionicons.font]);

    await Promise.all([...imageAssets, ...fontAssets]);
  }

  render() {
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._loadAssetsAsync}
          onFinish={() => this.setState({ isReady: true })}
        />
      );
    }

    return <App />;
  }
}

registerRootComponent(AppContainer);
