import React, { Component } from 'react';
import { View, Text, TouchableNativeFeedback } from 'react-native';
import PropTypes from 'prop-types';

export default class Tabs extends Component {
    render() {
        return (
            <ViewFadeIn style={{ height: '10%', flexDirection: 'row' }}>
                <TouchableNativeFeedback onPress={this.props.changeView.bind(this, 'profile')} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '100%', width: '33%', justifyContent: 'center', backgroundColor: dominantColor }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', color: accentColor, fontSize: 20 }}>Profile</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ width: '0.5%', height: '100%', backgroundColor: accentColor }}></View>
                <TouchableNativeFeedback onPress={this.props.changeView.bind(this, 'jarlist')} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '100%', width: '33%', justifyContent: 'center', backgroundColor: dominantColor }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', color: accentColor, fontSize: 20 }}>Jars</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ width: '0.5%', height: '100%', backgroundColor: accentColor }}></View>
                <TouchableNativeFeedback onPress={this.props.changeView.bind(this, 'jarnew')} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '100%', width: '33%', justifyContent: 'center', backgroundColor: dominantColor }}>
                        <Text style={{ textAlign: 'center', fontFamily: 'Rye-Regular', color: accentColor, fontSize: 20 }}>New +</Text>
                    </View>
                </TouchableNativeFeedback>
            </ViewFadeIn>
        );
    }
}

Tabs.propTypes = {
    changeView: PropTypes.func.isRequired
}
