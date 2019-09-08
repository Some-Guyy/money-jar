import React, { Component } from 'react';
import { View, Image, Text, TextInput, StyleSheet } from 'react-native';

export default class Anonymous extends Component {
    render() {
        return (
            <View style={{ flex: 10 }}>
                <View style={{ alignItems: 'center', flex: 1 }}>
                    <Text style={{ flex: 1 }}></Text>
                    <Text style={{ flex: 1 }}>Log In!</Text>
                    {/* <TextInput style={{ flex: 1 }} onChangeText=> */}
                    <Text style={{ flex: 1 }}>Password</Text>
                    <Text style={{ flex: 1 }}>Don't have an account?</Text>
                    <Text style={{ flex: 1 }}>Sign up!</Text>
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