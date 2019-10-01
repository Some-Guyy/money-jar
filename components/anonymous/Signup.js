import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import ViewFadeIn from '../utilities/ViewFadeIn';

export default class Signup extends Component {
    state = {
        emailField: '',
        passwordField: '',
        confirmPasswordField: ''
    }

    render() {
        return (
            <ViewFadeIn style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ height: '10%' }}></View>
                <Text style={[styles.bodyText, { height: '7%', fontSize: 20 }]}>Sign up for an account!</Text>
                <Text style={[styles.bodyText, { height: '8%', textAlign: 'center' }]}>Please provide a vaild email for verification and authentication purposes.</Text>
                <View style={{ height: '1%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Email </Text>
                    <TextInput value={this.state.emailField} onSubmitEditing={_ => this.refs.passwordField.focus()} onChangeText={text => { this.setState({ emailField: text }) }} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} keyboardType='email-address' />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '2%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Password </Text>
                    <TextInput ref={'passwordField'} onSubmitEditing={_ => this.refs.confirmPasswordField.focus()} secureTextEntry={true} value={this.state.passwordField} onChangeText={text => { this.setState({ passwordField: text }) }} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '2%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Confirm {'\n'}Password </Text>
                    <TextInput ref={'confirmPasswordField'} onSubmitEditing={this.props.signup.bind(this, this.state.emailField, this.state.passwordField, this.state.confirmPasswordField)} secureTextEntry={true} value={this.state.confirmPasswordField} onChangeText={text => { this.setState({ confirmPasswordField: text }) }} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '2%' }}></View>
                <Text style={[styles.bodyText, { height: '6%', fontSize: 14, textAlign: 'center' }]}>Note: Passwords should at least be 6 characters long.</Text>
                <View style={{ height: '5%' }}></View>
                <TouchableNativeFeedback onPress={this.props.signup.bind(this, this.state.emailField, this.state.passwordField, this.state.confirmPasswordField)} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '8%', width: '30%', alignItems: 'center', backgroundColor: proceedColor, padding: 10 }}>
                        <Text style={[styles.bodyText, { color: accentColor }]}>Sign up!</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ height: '18%' }}></View>
                <View style={{ height: '10%', flexDirection: 'row' }}>
                    <Text style={styles.bodyText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.props.changeScreen.bind(this, 'login')}>
                        <Text style={[styles.bodyText, { color: dominantColor }]}> Log in!</Text>
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

Signup.propTypes = {
    changeScreen: PropTypes.func.isRequired,
    signup: PropTypes.func.isRequired
}
