import React, { Component } from 'react';
import { ImageBackground, Alert } from 'react-native';

import Header from './components/layout/Header';
import Anonymous from './components/anonymous/Anonymous';
import Authorized from './components/authorized/Authorized';

export default class HelloWorldApp extends Component {
  state = {
    loggedIn: false,
    header: 'Money Jar'
  }

  checkCredentials = (status, email, password) => {
    if (email == '' || password == '') {
      Alert.alert('Note', "Fields must not be empty!")
    } else {
      this.setState({ loggedIn: status })
    }
  }

  render() {
    return (
      <ImageBackground source={require('./assets/images/background.jpg')} style={{ flex: 1 }}>
        <Header header={this.state.header} />
        {this.state.loggedIn == true
          ? <Authorized checkCredentials={this.checkCredentials} />
          : <Anonymous checkCredentials={this.checkCredentials} />
        }
      </ImageBackground>
    );
  }
}