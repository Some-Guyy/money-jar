import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Header extends Component {
    render() {
        return (
            <View style={{ backgroundColor: '#6c00a2', justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                <Text style={{ fontFamily: 'Rye-Regular', color: '#fff', fontSize: 25 }}>Money Jar</Text>
            </View>
        );
    }
}