import React, { Component } from 'react';
import { ImageBackground, Alert } from 'react-native';
import firebase from 'react-native-firebase';

import Header from './components/layout/Header';
import Anonymous from './components/anonymous/Anonymous';
import Authorized from './components/authorized/Authorized';

export default class App extends Component {
  state = {
    user: null
  }
  unsubscriber = null;
  ref = firebase.firestore().collection('users');

  componentDidMount = _ => {
    this.unsubscriber = firebase.auth().onAuthStateChanged(user => this.setState({ user }));
  }

  componentWillUnmount = _ => {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  signup = (email, password, confirmPassword) => {
    if (email === '' || password === '' || confirmPassword === '') {
      Alert.alert('Error', "Fields must not be empty!");
    } else if (password != confirmPassword) {
      Alert.alert('Error', "Passwords do not match!");
    } else {
      firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
          this.ref.doc(this.state.user.uid).set({
            jars: []
          });
          this.state.user.sendEmailVerification()
            .then(_ => Alert.alert('Success', `We have sent a verification email to ${email}. Please verify it before logging in.`))
            .catch(err => Alert.alert('Error', err.toString()))
            .finally(_ => firebase.auth().signOut().catch(err => Alert.alert('Error', err.toString()))) // Log out.
        })
        .catch(err => Alert.alert('Error', err.toString()))
    }
  }

  login = (email, password) => {
    if (email == '' || password == '') {
      Alert.alert('Error', "Fields must not be empty!")
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(_ => {
          if (!this.state.user.emailVerified) {
            Alert.alert(
              'Sorry',
              `Please verify your account to be able to use Money Jar. If you have not received the verification email, press "RESEND" and we will resend it to ${email} shortly.`,
              [
                {
                  text: 'OK',
                  style: 'cancel',
                  onPress: _ => firebase.auth().signOut().catch(err => Alert.alert('Error', err.toString())) // Log out.
                },
                {
                  text: 'Resend',
                  onPress: _ => this.state.user.sendEmailVerification()
                    .then(_ => Alert.alert('Success', `Verification email resent to ${email}.`))
                    .catch(err => Alert.alert('Error', err.toString()))
                    .finally(_ => firebase.auth().signOut().catch(err => Alert.alert('Error', err.toString()))) // Log out.
                }
              ],
              { cancelable: false }
            );
          }
        })
        .catch(err => Alert.alert('Error', err.toString()))
    }
  }

  logout = _ => firebase.auth().signOut().catch(err => Alert.alert('Error', err.toString()))

  render() {
    return (
      <ImageBackground source={require('./assets/images/background.jpg')} style={{ flex: 1 }}>
        <Header header={'Money Jar'} />
        {this.state.user === null || !this.state.user.emailVerified
          ? <Anonymous signup={this.signup} login={this.login} />
          : <Authorized user={this.state.user} logout={this.logout} />
        }
      </ImageBackground>
    );
  }
}
