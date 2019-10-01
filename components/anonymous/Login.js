import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import ViewFadeIn from '../utilities/ViewFadeIn';

export default class Login extends Component {
    state = {
        emailField: '',
        passwordField: ''
    }

    render() {
        return (
            <ViewFadeIn style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ height: '18%' }}></View>
                <Text style={[styles.bodyText, { height: '7%', fontSize: 20 }]}>Log into MoneyJar!</Text>
                <View style={{ height: '1%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Email </Text>
                    <TextInput value={this.state.emailField} onSubmitEditing={_ => this.refs.passwordField.focus()} onChangeText={text => { this.setState({ emailField: text }) }} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} keyboardType='email-address' />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '2%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Password </Text>
                    <TextInput ref={'passwordField'} onSubmitEditing={this.props.login.bind(this, this.state.emailField, this.state.passwordField)} secureTextEntry={true} value={this.state.passwordField} onChangeText={text => { this.setState({ passwordField: text }) }} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '5%' }}></View>
                <TouchableNativeFeedback onPress={this.props.login.bind(this, this.state.emailField, this.state.passwordField)} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '8%', width: '30%', alignItems: 'center', backgroundColor: proceedColor, padding: 10 }}>
                        <Text style={[styles.bodyText, { color: accentColor }]}>Log in!</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ height: '35%' }}></View>
                <View style={{ height: '10%', flexDirection: 'row' }}>
                    <Text style={styles.bodyText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.props.changeScreen.bind(this, 'signup')}>
                        <Text style={[styles.bodyText, { color: dominantColor }]}> Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </ViewFadeIn>
        );
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 16
    }
})

Login.propTypes = {
    changeScreen: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}
