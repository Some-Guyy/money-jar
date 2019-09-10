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
  ref = firebase.firestore().collection('users');

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

  signup = (email, password) => {
    if (email == '' || password == '') {
      Alert.alert('Error', "Fields must not be empty!")
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.ref.doc(this.state.user.uid).set({
            jars: []
          })
        })
        .catch(err => Alert.alert('Error', err.toString()))
    }
  }

  login = (email, password) => {
    if (email == '' || password == '') {
      Alert.alert('Error', "Fields must not be empty!")
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password).catch(err => Alert.alert('Error', err.toString()))
    }
  }

  logout = () => {
    firebase.auth().signOut()
  }

  render() {
    return (
      <ImageBackground source={require('./assets/images/background.jpg')} style={{ flex: 1 }}>
        <Header header={'Money Jar'} />
        {!this.state.user
          ? <Anonymous signup={this.signup} login={this.login} />
          : <Authorized user={this.state.user} logout={this.logout} />
        }
      </ImageBackground>
    );
  }
}