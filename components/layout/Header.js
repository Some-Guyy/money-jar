import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{ backgroundColor: dominantColor, justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontFamily: 'Rye-Regular', color: accentColor, fontSize: 25 }}>Money Jar</Text>
            </View>
        );
    }
}