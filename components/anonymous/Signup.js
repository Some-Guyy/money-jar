import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class Signup extends Component {
    render() {
        return (
            <FadeInView style={{ flex: 1, alignItems: 'center' }}>
                <Text style={{ height: '20%' }}></Text>
                <Text style={[styles.bodyText, { height: '7%', fontSize: 20 }]}>SIGN into MoneyJar!</Text>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Email </Text>
                    <TextInput style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '2%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Password </Text>
                    <TextInput style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '5%' }}></View>
                <TouchableOpacity style={{ height: '7%', width: '30%', alignItems: 'center', backgroundColor: dominantColor, padding: 10 }}>
                    <Text style={[styles.bodyText, { color: accentColor }]}>Log in!</Text>
                </TouchableOpacity>
                <View style={{ height: '35%' }}></View>
                <View style={{ height: '10%', flexDirection: 'row' }}>
                    <Text style={styles.bodyText}>Don't have an account?</Text>
                    <TouchableOpacity onPress={this.props.changeScreen.bind(this, 'login')}>
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
                duration: 1000,
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

Signup.propTypes = {
    changeScreen: PropTypes.func.isRequired
}