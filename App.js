import React, { Component } from 'react';
import { View } from 'react-native';

import Anonymous from './components/Anonymous';
import Authorized from './components/Authorized';

export default class HelloWorldApp extends Component {
  state = {
    loggedIn: 'no'
  }

  render() {
    return (
      <View style={{flex: 1}}>
        {this.state.loggedIn == 'yes'
          ? <Authorized />
          : <Anonymous />
        }
      </View>
    );
  }
}