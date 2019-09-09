import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import PropTypes from 'prop-types';

import Tabs from '../layout/Tabs';
import JarList from './JarList';

export default class Authorized extends Component {
    state = {
        jars: [
            {
                id: 1,
                name: 'Savings',
                value: 300.00
            },
            {
                id: 2,
                name: 'Transport',
                value: 100.00
            },
            {
                id: 3,
                name: 'Bills',
                value: 75.00
            },
            {
                id: 4,
                name: 'Gambling',
                value: 69.00
            },
            {
                id: 5,
                name: 'Shopping',
                value: 0.05
            },
            {
                id: 6,
                name: 'Child Support',
                value: 0.01
            }
        ]
    }

    addJar = () => { }

    render() {
        return (
            <View style={{ flex: 10 }}>
                <ScrollView style={{ height: '90%' }}>
                    <JarList jars={this.state.jars} />
                </ScrollView>
                <Tabs />
            </View>
        );
    }
}