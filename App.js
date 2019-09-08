import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './components/layout/Header';
import Anonymous from './components/Anonymous';
import Authorized from './components/Authorized';

export default class HelloWorldApp extends Component {
  state = {
    loggedIn: 'no'
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        <Header />
        {this.state.loggedIn == 'yes'
          ? <Authorized />
          : <Anonymous />
        }
      </View>
    );
  }
}