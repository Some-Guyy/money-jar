import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableNativeFeedback, Animated, Alert } from 'react-native';
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
                <View style={{ height: '15%' }}></View>
                <Text style={[styles.bodyText, { height: '8%', fontSize: 24}]}>Create a new Jar!</Text>

                <View style={{ height: '2%' }}></View>

                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Name </Text>
                    <TextInput value={this.state.nameField} onChangeText={(text) => { this.setState({ nameField: text})}} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>

                <View style={{ height: '2%' }}></View>

                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Value </Text>
                    <TextInput value={this.state.valueField} onChangeText={(text) => this.numbersOnlyValue(text)} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} keyboardType='numeric' />
                    <View style={{ width: '20%' }}></View>
                </View>

                <View style={{ height: '5%' }}></View>

                <TouchableNativeFeedback onPress={this.props.addJar.bind(this, this.state.nameField, this.state.valueField)} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '8%', width: '30%', alignItems: 'center', backgroundColor: proceedColor, padding: 10 }}>
                        <Text style={[styles.bodyText, { color: accentColor }]}>Create!</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ height: '46%' }}></View>
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

JarNew.propTypes = {
    addJar: PropTypes.func.isRequired
}