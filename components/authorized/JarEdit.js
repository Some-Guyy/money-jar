import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class JarEdit extends Component {
    state = {
        addField: '',
        modifyField: this.props.focusedJar.value.toString()
    }

    render() {
        return (
            <FadeInView style={{ alignItems: 'center' }}>
                <Text style={{ height: '20%' }}></Text>
                <Text style={[styles.bodyText, { height: '7%', fontSize: 20 }]}>{this.props.focusedJar.name}</Text>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Add </Text>
                    <TextInput value={this.state.addField} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '2%' }}></View>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Modify </Text>
                    <TextInput value={this.state.modifyField} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>
                <View style={{ height: '5%' }}></View>
                <TouchableOpacity onPress={this.props.deleteJar.bind(this, this.props.focusedJar.id)} style={{ height: '8%', width: '30%', alignItems: 'center', backgroundColor: dominantColor, padding: 10 }}>
                    <Text style={[styles.bodyText, { color: accentColor }]}>Delete Jar!</Text>
                </TouchableOpacity>
                <View style={{ height: '44%' }}></View>
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
                duration: 1000,
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

JarEdit.propTypes = {
    focusedJar: PropTypes.object.isRequired,
    deleteJar: PropTypes.func.isRequired
}