import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

export default class Jar extends Component {
    render() {
        return (
            <TouchableNativeFeedback onPress={this.props.editJar.bind(this, this.props.jar)} background={TouchableNativeFeedback.Ripple()}>
                <View style={{ height: 80, justifyContent: 'center', alignItems: 'center', borderColor: dominantColor, borderWidth: 1 }}>
                    <Text style={styles.bodyText}>{this.props.jar.name}</Text>
                    <Text style={[styles.bodyText, { fontSize: 16 }]}>${parseFloat(this.props.jar.value).toFixed(2)}</Text>
                </View>
            </TouchableNativeFeedback>
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
    jar: PropTypes.object,
    editJar: PropTypes.func.isRequired
}
