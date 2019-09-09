import React, { Component } from 'react';
import { View, ScrollView, Alert } from 'react-native';
import PropTypes from 'prop-types';

import Tabs from '../layout/Tabs';
import JarList from './JarList';
import JarEdit from './JarEdit';

export default class Authorized extends Component {
    state = {
        view: 'jarlist',
        focusedJar: 'none',
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
            },
            {
                id: 7,
                name: 'eat shit',
                value: 6969.69
            }
        ]
    }

    editJar = (jar) => {
        this.setState({
            view: 'jarfocus',
            focusedJar: jar
        })
    }

    deleteJar = (id) => {
        this.setState({
            jars: [...this.state.jars.filter(jar => jar.id !== id)],
            view: 'jarlist',
            focusedJar: 'none'
        })
    }

    render() {
        return (
            <View style={{ flex: 10 }}>
                {this.state.view == 'jarlist'
                    ? <ScrollView style={{ height: '90%' }}><JarList jars={this.state.jars} editJar={this.editJar} /></ScrollView>
                    : <View style={{ height: '90%' }}><JarEdit focusedJar={this.state.focusedJar} deleteJar={this.deleteJar} /></View>
                }
                <Tabs />
            </View>
        );
    }
}