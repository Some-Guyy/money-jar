import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class Login extends Component {
    state = {
        emailField: '',
        passwordField: ''
    }

    render() {
        return (
            <FadeInView style={{ flex: 1, alignItems: 'center' }}>
                <View style={{ height: '18%' }}></View>
                <Text style={[styles.bodyText, { height: '7%', fontSize: 20 }]}>Log into MoneyJar!</Text>
                <View style={{ height: '1%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Email </Text>
                    <TextInput value={this.state.emailField} onChangeText={(text) => { this.setState({ emailField: text})}} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '2%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Password </Text>
                    <TextInput secureTextEntry={true} value={this.state.passwordField} onChangeText={(text) => { this.setState({ passwordField: text})}} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '5%' }}></View>
                <TouchableOpacity onPress={this.props.login.bind(this, this.state.emailField, this.state.passwordField)} style={{ height: '8%', width: '30%', alignItems: 'center', backgroundColor: proceedColor, padding: 10 }}>
                    <Text style={[styles.bodyText, { color: accentColor }]}>Log in!</Text>
                </TouchableOpacity>
                <View style={{ height: '35%' }}></View>
                <View style={{ height: '10%', flexDirection: 'row' }}>
                    <Text style={styles.bodyText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.props.changeScreen.bind(this, 'signup')}>
                        <Text style={[styles.bodyText, { color: dominantColor }]}> Sign up!</Text>
                    </TouchableOpacity>
                </View>
            </FadeInView >
        );
    }
}

const FadeInView = (props) => {
    const [fadeAdmin] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAdmin,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }, [])

    return (
        // Special animatable View
        // Bind opacity to animated value
        <Animated.View style={{ ...props.style, opacity: fadeAdmin }}>
            {props.children}
        </Animated.View>
    );
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