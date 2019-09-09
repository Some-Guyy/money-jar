import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Animated, Alert } from 'react-native';
import PropTypes from 'prop-types';

export default class JarEdit extends Component {
    state = {
        nameField: this.props.focusedJar.name,
        valueField: this.props.focusedJar.value.toString(),
        addField: ''
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
    numbersOnlyAdd = (text) => {
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
        this.setState({ addField: newText });
    }

    render() {
        return (
            <FadeInView style={{ alignItems: 'center' }}>
                <Text style={{ height: '10%' }}></Text>
                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Name </Text>
                    <TextInput value={this.state.nameField} onChangeText={(text) => { this.setState({ nameField: text})}} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>

                <View style={{ height: '2%' }}></View>

                <View style={{ height: '7%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { width: '30%', textAlignVertical: 'center', textAlign: 'right' }]}>Modify </Text>
                    <TextInput value={this.state.valueField} onChangeText={(text) => this.numbersOnlyValue(text)} style={[styles.bodyText, { width: '50%', borderColor: dominantColor, borderWidth: 1 }]} />
                    <View style={{ width: '20%' }}></View>
                </View>

                <View style={{ height: '5%' }}></View>

                <TouchableOpacity onPress={this.props.updateJar.bind(this, this.props.focusedJar.id, this.state.nameField, this.state.valueField)} style={{ height: '8%', width: '30%', alignItems: 'center', backgroundColor: dominantColor, padding: 10 }}>
                    <Text style={[styles.bodyText, { color: accentColor }]}>Update</Text>
                </TouchableOpacity>

                <View style={{ height: '5%' }}></View>

                <TouchableOpacity onPress={this.props.deleteJar.bind(this, this.props.focusedJar.id)} style={{ height: '8%', width: '30%', alignItems: 'center', backgroundColor: '#cc0000', padding: 10 }}>
                    <Text style={[styles.bodyText, { color: accentColor }]}>Delete!</Text>
                </TouchableOpacity>
                <View style={{ height: '1%' }}></View>
                <Text style={[styles.bodyText, {height: '6%', fontSize: 14}]}>Warning: Once you delete a jar, it's gone for good.</Text>

                <View style={{ height: '5%' }}></View>

                <Text style={[styles.bodyText, {height: '6%'}]}>Add to the jar!</Text>
                <TextInput value={this.state.addField} onChangeText={(text) => this.numbersOnlyAdd(text)} style={[styles.bodyText, { height: '7%', width: '30%', borderColor: dominantColor, borderWidth: 1 }]} />
                <View style={{ height: '2%' }}></View>
                <TouchableOpacity onPress={this.props.addJarValue.bind(this, this.props.focusedJar.id, this.state.addField)} style={{ height: '8%', width: '20%', alignItems: 'center', backgroundColor: dominantColor, padding: 10 }}>
                    <Text style={[styles.bodyText, { color: accentColor }]}>Add!</Text>
                </TouchableOpacity>
                <View style={{ height: '13%' }}></View>
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

JarEdit.propTypes = {
    focusedJar: PropTypes.object.isRequired,
    addJarValue: PropTypes.func.isRequired,
    updateJar: PropTypes.func.isRequired,
    deleteJar: PropTypes.func.isRequired
}