import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

export default class Anonymous extends Component {
    render() {
        return (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
                <Text>MoneyJar, a simple but effective money manager.</Text>
                <Text>Log In!</Text>
                <Text>Email</Text>
                <Text>Facebook</Text>
                <Text>Don't have an account?</Text>
                <Text>Sign up!</Text>
            </View>
        );
    }
}