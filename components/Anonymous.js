import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

export default class Anonymous extends Component {
    render() {
        return (
            <View style={{ flex: 10 }}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Text style={{ flex: 2 }}></Text>
                    <Text style={{ flex: 2 }}>Log In!</Text>
                    <View style={{ flex: 1, borderColor: '#6c00a2', borderWidth: 1 }}><TextInput /></View>
                    <Text style={{ flex: 2 }}>Password</Text>
                    <Text style={{ flex: 2 }}>Don't have an account?</Text>
                    <Text style={{ flex: 2 }}>Sign up!</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontSize: 18
    }
})