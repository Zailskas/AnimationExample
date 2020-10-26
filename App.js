/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react';
import {
  Image,
  StyleSheet,
  Button,
  View,
  Text,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');
const cloudWidth = 60;
class App extends Component {
  render() {
    return (
      <View>
        <Text>Hi</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  cloud1: {
    position: 'absolute',
    width: cloudWidth,
    height: cloudWidth,
    top: height / 3 - cloudWidth / 2,
  },
  cloud2: {
    width: cloudWidth * 1.5,
    height: cloudWidth * 1.5,
    top: height / 2,
  },
  plane: {
    position: 'absolute',
    width: cloudWidth * 1.3,
    height: cloudWidth * 1.3,
    top: height / 2 - cloudWidth,
    left: width / 2 - cloudWidth / 2,
  },
  logo: {
    width: 100,
    height: 100,
  },
});
export default App;
