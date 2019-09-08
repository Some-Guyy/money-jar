import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';

import Header from './layout/Header';
import Tabs from './layout/Tabs';

export default class Authorized extends Component {
    render() {
        return (
            <View>
                <Header />
                <Tabs />
            </View>
        );
    }
}