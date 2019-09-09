import React, { Component } from 'react';
import { View } from 'react-native';

import Header from './components/layout/Header';
import Anonymous from './components/anonymous/Anonymous';
import Authorized from './components/authorized/Authorized';

export default class HelloWorldApp extends Component {
  state = {
    loggedIn: 'no',
    header: 'Money Jar'
  }

  changeHeader = (newHeader) => this.setState({ header: newHeader })

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: backgroundColor }}>
        <Header header={this.state.header} />
        {this.state.loggedIn == 'yes'
          ? <Authorized changeHeader={this.changeHeader} />
          : <Anonymous changeHeader={this.changeHeader} />
        }
      </View>
    );
  }
}