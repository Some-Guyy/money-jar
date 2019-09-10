import React, { Component } from 'react';
import { ImageBackground, Alert } from 'react-native';
import firebase from 'react-native-firebase';

import Header from './components/layout/Header';
import Anonymous from './components/anonymous/Anonymous';
import Authorized from './components/authorized/Authorized';

export default class HelloWorldApp extends Component {
  state = {
    user: null
  }
  unsubscriber = null;

  componentDidMount = () => {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount = () => {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  checkCredentials = (status, email, password) => {
    if (email == '' || password == '') {
      Alert.alert('Note', "Fields must not be empty!")
    } else {
      this.setState({ user: status })
    }
  }

  render() {
    return (
      <ImageBackground source={require('./assets/images/background.jpg')} style={{ flex: 1 }}>
        <Header header={'Money Jar'} />
        {!this.state.user
          ? <Anonymous checkCredentials={this.checkCredentials} />
          : <Authorized checkCredentials={this.checkCredentials} />
        }
      </ImageBackground>
    );
  }
}