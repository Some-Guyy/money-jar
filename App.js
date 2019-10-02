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
    if (email === '' || password === '') {
      Alert.alert('Error', "Fields must not be empty!")
    } else {
      firebase.auth().signInWithEmailAndPassword(email, password)
        .then(_ => {
          if (!this.state.user.emailVerified) {
            Alert.alert(
              'Sorry',
              `Please verify your account to be able to use Money Jar. If you have not received the verification email, press 'RESEND' and we will resend it to ${email} shortly.`,
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

  resetPwd = _ => Alert.alert(
    'Warning',
    "Are you sure you want to reset your password? Press 'CONFIRM' and we will send you an email to reset your password.",
    [
      {
        text: 'Cancel',
        style: 'cancel'
      },
      {
        text: 'Confirm',
        onPress: _ => firebase.auth().sendPasswordResetEmail(this.state.user.email)
          .then(Alert.alert('Success', `Email for resetting password successfully sent to ${this.state.user.email}.`))
          .catch(err => Alert.alert('Error', err.toString()))
      }
    ],
    { cancelable: true }
  )

  deleteAcc = password => {
    const email = this.state.user.email
    const credentials = firebase.auth.EmailAuthProvider.credential(
      email,
      password
    )

    if (password === '') {
      Alert.alert('Error', "Please enter your password to authorize the deletion of your account.");
    } else {
      Alert.alert(
        'Warning',
        "This is a final confirmation, press 'DELETE' to completely delete your account and erase all of its info.",
        [
          {
            text: 'Cancel',
            style: 'cancel'
          },
          {
            text: 'Delete',
            onPress: _ => this.state.user.reauthenticateWithCredential(credentials)
              .then(_ => this.ref.doc(this.state.user.uid).delete()
                .then(_ => this.state.user.delete()
                  .then(_ => Alert.alert('Success', `Successfully deleted your ${email} account. Thank you for using Money Jar!`))
                  .catch(err => Alert.alert('Error', "Your data was successfully deleted but your account wasn't. Please contact the developer to solve this issue.\n" + err.toString()))
                )
                .catch(err => Alert.alert('Error', err.toString()))
              )
              .catch(err => Alert.alert('Error', err.toString()))
          }
        ],
        { cancelable: true }
      );
    }
  }

  render() {
    return (
      <ImageBackground source={require('./assets/images/background.jpg')} style={{ flex: 1 }}>
        <Header header={'Money Jar'} />
        {this.state.user === null || !this.state.user.emailVerified
          ? <Anonymous signup={this.signup} login={this.login} />
          : <Authorized user={this.state.user} logout={this.logout} resetPwd={this.resetPwd} deleteAcc={this.deleteAcc} />
        }
      </ImageBackground>
    );
  }
}
