import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class Jar extends Component {
    render() {
        return (
            <View style={{ height: 100, justifyContent: 'center', alignItems: 'center', borderColor: dominantColor, borderWidth: 1 }}>
                <Text style={styles.bodyText}>{this.props.jar.name}</Text>
                <Text style={[styles.bodyText, {fontSize: 16}]}>${this.props.jar.value.toFixed(2)}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 20
    }
})

Jar.propTypes = {
    jar: PropTypes.object
}