import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated, Alert } from 'react-native';
import PropTypes from 'prop-types';

export default class JarNew extends Component {
    state = {
        nameField: '',
        valueField: ''
    }

    numbersOnlyValue = (text) => {
        let newText = '';
        let numbers = '-.0123456789';
    
        for (var i=0; i < text.length; i++) {
            if (numbers.indexOf(text[i]) > -1 ) {
                newText = newText + text[i];
            } else if (text[i] == ' '){
                // remove any auto-spacing that devices add in
            } else {
                // your call back function
                Alert.alert('Note', "Please enter numbers only.");
            }
        }
        this.setState({ valueField: newText });
    }

    render() {
        return (
            <FadeInView style={{ alignItems: 'center' }}>
                <Text>hi</Text>
            </FadeInView>
        )
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

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 16
    }
})