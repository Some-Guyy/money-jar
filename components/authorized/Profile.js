import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

import ViewFadeIn from '../utilities/ViewFadeIn';

export default class Profile extends Component {
    jarArray = this.props.jars.map(jar => jar.value);

    render() {
        return (
            <ViewFadeIn style={{ alignItems: 'center' }}>
                <View style={{ height: '10%' }}></View>
                <Text style={[styles.bodyText, { height: '8%', fontSize: 24 }]}>User's Profile</Text>
                <View style={{ height: '10%' }}></View>
                <View style={{ height: '8%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { fontSize: 20 }]}>Jar Net Worth: $</Text>
                    <Text style={[styles.bodyText, { fontSize: 20 }]}>
                        {this.jarArray.reduce((accumulator, currentValue) => { return parseFloat(accumulator) + parseFloat(currentValue) }, 0).toFixed(2)}
                    </Text>
                </View>
                <View style={{ height: '45%' }}></View>
                <TouchableNativeFeedback onPress={this.props.logout.bind(this)} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '9%', width: '30%', alignItems: 'center', backgroundColor: warnColor, padding: 10 }}>
                        <Text style={[styles.bodyText, { color: accentColor }]}>Log out</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ height: '10%' }}></View>
            </ViewFadeIn>
        )
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 16
    }
})

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    jars: PropTypes.array,
    logout: PropTypes.func.isRequired
}