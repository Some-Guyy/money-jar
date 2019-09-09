import React, { Component, useState, useEffect } from 'react';
import { View, Text, Animated, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
    render() {
        return (
            <FadeInView style={{ height: '10%', backgroundColor: dominantColor, alignItems: 'center', flexDirection: 'row' }}>
                <TouchableOpacity onPress={this.props.changeView.bind(this, 'profile')} style={{ width: '33%' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', color: accentColor, fontSize: 20 }}>Profile</Text>
                </TouchableOpacity>
                <View style={{ width: '0.5%', height: '100%', backgroundColor: accentColor }}></View>
                <TouchableOpacity onPress={this.props.changeView.bind(this, 'jarnew')} style={{ width: '33%' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', color: accentColor, fontSize: 20 }}>New +</Text>
                </TouchableOpacity>
                <View style={{ width: '0.5%', height: '100%', backgroundColor: accentColor }}></View>
                <TouchableOpacity onPress={this.props.changeView.bind(this, 'jarlist')} style={{ width: '33%' }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', color: accentColor, fontSize: 20 }}>Jars</Text>
                </TouchableOpacity>
            </FadeInView>
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

Tabs.propTypes = {
    changeView: PropTypes.func.isRequired
}