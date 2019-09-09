import React, { Component } from 'react';
import { View, ScrollView, Text, Alert } from 'react-native';
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

    updateJar = (id, newName, newValue) => {
        this.setState({
            jars: this.state.jars.map(jar => {
                if (jar.id === id) {
                    jar.name = newName;
                    jar.value = newValue;
                }
                return jar;
            }),
            view: 'jarlist',
            focusedJar: 'none'
        });
    }

    deleteJar = (id) => {
        Alert.alert(
            'Warning',
            "You are about to delete a jar. This action is irreversible! Are you sure you want to continue?",
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: () => {
                        this.setState({
                            jars: [...this.state.jars.filter(jar => jar.id !== id)],
                            view: 'jarlist',
                            focusedJar: 'none'
                        })
                    }
                }
            ],
            {cancelable: false}
        )

    }

    render() {
        return (
            <View style={{ flex: 10 }}>
                {this.state.view == 'jarlist'
                    ? <ScrollView style={{ height: '90%' }}><JarList jars={this.state.jars} editJar={this.editJar} /></ScrollView>
                    : (this.state.view == 'jarfocus'
                        ? <View style={{ height: '90%' }}><JarEdit focusedJar={this.state.focusedJar} updateJar={this.updateJar} deleteJar={this.deleteJar} /></View>
                        : <View style={{ height: '90%' }}><Text>account</Text></View>
                    )
                }
                <Tabs />
            </View>
        );
    }
}