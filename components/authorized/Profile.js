import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import ViewFadeIn from '../utilities/ViewFadeIn';

export default class Profile extends Component {
    jarArray = this.props.jars.map(jar => jar.value);

    render() {
        return (
            <ViewFadeIn style={{ alignItems: 'center' }}>
                <View style={{ height: '5%' }}></View>
                <View style={{ height: '76%' }}>
                    <Text style={[styles.bodyText, { fontSize: 24 }]}>Profile</Text>
                    <Text style={styles.bodyText}>Email: {this.props.user.email}</Text>
                    <Text style={styles.bodyText}>Jar Net Worth{
                        isNaN(this.jarArray.reduce((accumulator, currentValue) => { return parseFloat(accumulator) + parseFloat(currentValue) }, 0).toFixed(2))
                            ? " hasn't yet loaded, please go back to the Jars tab below to load your jars before coming back."
                            : ": $" + this.jarArray.reduce((accumulator, currentValue) => { return parseFloat(accumulator) + parseFloat(currentValue) }, 0).toFixed(2)
                    }</Text>
                    <TouchableOpacity onPress={this.props.resetPwd}><Text style={[styles.bodyText, { color: dominantColor, textDecorationLine: 'underline' }]}>Reset Password</Text></TouchableOpacity>
                </View>
                <View style={{ height: '9%', flexDirection: 'row' }}>
                    <TouchableNativeFeedback onPress={this.props.logout.bind(this)} background={TouchableNativeFeedback.Ripple()}>
                        <View style={{ width: '30%', alignItems: 'center', backgroundColor: warnColor, padding: 10 }}>
                            <Text style={[styles.bodyText, { color: accentColor }]}>Log out</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
                <View style={{ height: '10%' }}></View>
            </ViewFadeIn>
        )
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 18,
        textAlign: 'center'
    }
})

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    jars: PropTypes.array,
    logout: PropTypes.func.isRequired,
    resetPwd: PropTypes.func.isRequired
}