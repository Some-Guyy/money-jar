import React, { Component } from 'react';
import { View } from 'react-native';

import Anonymous from './components/Anonymous';

export default class HelloWorldApp extends Component {
  render() {
    return (
      <View>
        <Anonymous />
      </View>
    );
  }
}