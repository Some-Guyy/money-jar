import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import Header from './layout/Header';

export default class Anonymous extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <Header />
                <View style={{ alignItems: 'center', justifyContent: 'space-between', flex: 10 }}>
                    <Text style={[styles.bodyText]}>MoneyJar, a simple but effective money manager.</Text>
                    <Text style={{}}>Log In!</Text>
                    <Text>Email</Text>
                    <Text>Facebook</Text>
                    <Text>Don't have an account?</Text>
                    <Text>Sign up!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontSize: 18,
        justifyContent: 'space-between'
    }
})