import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity } from 'react-native';

export default class Anonymous extends Component {
    render() {
        return (
            <View style={{ flex: 10 }}>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ height: '20%' }}></Text>
                    <Text style={[styles.bodyText, { height: '7%', fontSize: 20 }]}>Log into MoneyJar!</Text>
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
                        <TouchableOpacity>
                            <Text style={[styles.bodyText, { color: dominantColor }]}> Sign up!</Text>
                        </TouchableOpacity>
                    </View>
                </View >
            </View >
        );
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 16
    }
})