import React, { Component, useState, useEffect } from 'react';
import { View, ScrollView, Text, Alert, Animated } from 'react-native';
import PropTypes from 'prop-types';

import Tabs from '../layout/Tabs';
import JarList from './JarList';
import JarEdit from './JarEdit';
import JarNew from './JarNew';
import Profile from './Profile';

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

    changeView = (view) => this.setState({ view: view })

    editJar = (jar) => {
        this.setState({
            view: 'jarfocus',
            focusedJar: jar
        })
    }

    addJarValue = (id, valueToAdd) => {
        if (valueToAdd == '') {
            Alert.alert('Error', "Why are you trying to add nothing?")
        } else {
            this.setState({
                jars: this.state.jars.map(jar => {
                    if (jar.id === id) {
                        jar.value = parseFloat(jar.value) + parseFloat(valueToAdd);
                    }
                    return jar;
                }),
                view: 'jarlist',
                focusedJar: 'none'
            });
        }
    }

    addJar = (name, value) => {
        if (name == '' || value == '') {
            Alert.alert('Error', "Fields must not be empty!")
        } else {
            const newJar = {
                id: 8,
                name: name,
                value: value
            }
            this.setState({
                jars: [...this.state.jars, newJar],
                view: 'jarlist',
                focusedJar: 'none'
            });
        }
    }

    updateJar = (id, newName, newValue) => {
        if (newName == '' || newValue == '') {
            Alert.alert('Error', "Fields must not be empty!")
        } else {
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
            { cancelable: false }
        )

    }

    render() {
        return (
            <View style={{ flex: 10 }}>
                {this.state.view == 'jarlist'
                    ? <View style={{ height: '90%' }}>
                        <FadeInView style={{ height: '10%', alignSelf: 'center', justifyContent: 'center' }}><Text style={{ fontFamily: 'Rye-Regular', fontSize: 22 }}>Welcome, {this.props.user.email}</Text></FadeInView>
                        <ScrollView style={{ height: '90%' }}><JarList jars={this.state.jars} editJar={this.editJar} /></ScrollView>
                    </View>
                    : (this.state.view == 'jarfocus'
                        ? <View style={{ height: '90%' }}><JarEdit focusedJar={this.state.focusedJar} addJarValue={this.addJarValue} updateJar={this.updateJar} deleteJar={this.deleteJar} /></View>
                        : (this.state.view == 'jarnew'
                            ? <View style={{ height: '90%' }}><JarNew addJar={this.addJar} /></View>
                            : <View style={{ height: '90%' }}><Profile user={this.props.user} jars={this.state.jars} logout={this.props.logout} /></View>
                        )
                    )
                }
                <Tabs changeView={this.changeView} />
            </View>
        );
    }
}

const FadeInView = (props) => {
    const [fadeAdmin] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAdmin,
            {
                toValue: 1,
                duration: 500,
            }
        ).start();
    }, [])

    return (
        // Special animatable View
        // Bind opacity to animated value
        <Animated.View style={{ ...props.style, opacity: fadeAdmin }}>
            {props.children}
        </Animated.View>
    );
}

Authorized.propTypes = {
    user: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
}