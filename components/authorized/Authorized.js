import React, { Component } from 'react';
import { StyleSheet, View, ScrollView, Text, Alert, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import firebase from 'react-native-firebase';
import uuid from 'uuid';
import PropTypes from 'prop-types';

import DismissKeyboard from '../utilities/DismissKeyboard';
import Tabs from '../layout/Tabs';
import JarList from './JarList';
import JarEdit from './JarEdit';
import JarNew from './JarNew';
import Profile from './Profile';
import ViewFadeIn from '../utilities/ViewFadeIn';

export default class Authorized extends Component {
    state = {
        view: 'jarlist',
        focusedJar: 'none',
        jars: ['none'],
        resendBtn: 'Resend',
        resendTxt: ' verification email.'
    }
    ref = firebase.firestore().collection('users').doc(this.props.user.uid)

    componentDidMount = () => {
        this.ref.get().then(doc => {
            this.setState({ jars: doc.data()['jars'] })
        }).catch(err => Alert.alert('Error', err.toString()));
    }

    changeView = (view) => this.setState({ view: view })

    editJar = (jar) => {
        this.setState({
            view: 'jarfocus',
            focusedJar: jar
        })
    }

    addJarValue = (id, valueToAdd) => {
        if (valueToAdd == '') {
            Alert.alert('Error', "Why are you trying to add nothing?")
        } else {
            this.state.jars.map(jar => {
                if (jar.id === id) {
                    jar.value = parseFloat(jar.value) + parseFloat(valueToAdd);
                }
            });
            this.ref.set({ jars: this.state.jars });
            this.setState({
                view: 'jarlist',
                focusedJar: 'none'
            });
        }
    }

    addJar = (name, value) => {
        if (name == '' || value == '') {
            Alert.alert('Error', "Fields must not be empty!")
        } else {
            const newJar = {
                id: uuid.v4(),
                name: name,
                value: value
            }
            this.state.jars.push(newJar);
            this.ref.set({ jars: this.state.jars });
            this.setState({
                view: 'jarlist',
                focusedJar: 'none'
            });
        }
    }

    updateJar = (id, newName, newValue) => {
        if (newName == '' || newValue == '') {
            Alert.alert('Error', "Fields must not be empty!")
        } else {
            this.state.jars.map(jar => {
                if (jar.id === id) {
                    jar.name = newName;
                    jar.value = newValue;
                }
            });
            this.ref.set({ jars: this.state.jars });
            this.setState({
                view: 'jarlist',
                focusedJar: 'none'
            });
        }
    }

    deleteJar = (id) => {
        Alert.alert(
            'Warning',
            "You are about to delete a jar. This action is irreversible! Are you sure you want to continue?",
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        this.setState({ jars: [...this.state.jars.filter(jar => jar.id !== id)] })
                        this.ref.set({ jars: this.state.jars })
                        this.setState({
                            view: 'jarlist',
                            focusedJar: 'none'
                        })
                    }
                }
            ],
            { cancelable: false }
        )
    }

    resendVerification = _ => {
        this.setState({ resendBtn: '', resendTxt: 'Resending verification email now...' });
        this.props.user.sendEmailVerification()
            .then(_ => Alert.alert('Notice', "Email verification resent!"))
            .catch(error => Alert.alert('Error', error))
            .finally(_ => this.setState({ resendBtn: 'Resend', resendTxt: ' verification email.' }))
    }

    render() {
        return (
            <DismissKeyboard>
                <View style={{ flex: 10 }}>
                    {!this.props.user.emailVerified
                        ? <ViewFadeIn style={{ height: '90%', alignItems: 'center' }}>
                            <View style={{ height: '10%', justifyContent: 'center' }}><Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', fontSize: 20 }}>Welcome!{'\n' + this.props.user.email}</Text></View>
                            <View style={{ height: '50%' }}>
                                <Text style={styles.text}>
                                    A verification email has been sent to you. Please verify it to be able to use MoneyJar.{'\n'}{'\n'}
                                </Text>
                                <Text style={[styles.text, { fontSize: 17 }]}>
                                    Did not receive the email?
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={this.resendVerification}>
                                        <Text style={[styles.text, { fontSize: 17, color: dominantColor, textDecorationLine: 'underline' }]}>{this.state.resendBtn}</Text>
                                    </TouchableOpacity>
                                    <Text style={[styles.text, { fontSize: 17 }]}>{this.state.resendTxt}</Text>
                                </View>
                            </View>
                            <View style={{ height: '9%', flexDirection: 'row' }}>
                                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple()}>
                                    <View style={{ width: '30%', alignItems: 'center', backgroundColor: dominantColor, padding: 10 }}>
                                        <Text style={[styles.text, { color: accentColor, fontSize: 16 }]}>Refresh</Text>
                                    </View>
                                </TouchableNativeFeedback>
                                <Text>   </Text>
                                <TouchableNativeFeedback onPress={this.props.logout.bind(this)} background={TouchableNativeFeedback.Ripple()}>
                                    <View style={{ width: '30%', alignItems: 'center', backgroundColor: warnColor, padding: 10 }}>
                                        <Text style={[styles.text, { color: accentColor, fontSize: 16 }]}>Log out</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{ height: '31%' }}></View>
                        </ViewFadeIn>
                        : (this.state.view == 'jarlist'
                            ? <View style={{ height: '90%' }}>
                                <ViewFadeIn style={{ height: '10%', justifyContent: 'center' }}><Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', fontSize: 20 }}>Welcome!{'\n' + this.props.user.email}</Text></ViewFadeIn>
                                <ScrollView style={{ height: '90%' }}><JarList jars={this.state.jars} editJar={this.editJar} /></ScrollView>
                            </View>
                            : (this.state.view == 'jarfocus'
                                ? <View style={{ height: '90%' }}><JarEdit focusedJar={this.state.focusedJar} addJarValue={this.addJarValue} updateJar={this.updateJar} deleteJar={this.deleteJar} /></View>
                                : (this.state.view == 'jarnew'
                                    ? <View style={{ height: '90%' }}><JarNew addJar={this.addJar} /></View>
                                    : <View style={{ height: '90%' }}><Profile user={this.props.user} jars={this.state.jars} logout={this.props.logout} /></View>
                                )
                            )
                        )
                    }
                    <Tabs changeView={this.changeView} />
                </View>
            </DismissKeyboard >
        );
    }
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 19,
        textAlign: 'center',
        textAlignVertical: 'center'
    }
})

Authorized.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}
