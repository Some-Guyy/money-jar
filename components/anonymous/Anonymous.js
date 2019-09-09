import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

import Login from './Login';
import Signup from './Signup';

export default class Anonymous extends Component {
    state = {
        screen: 'login'
    }

    changeScreen = (moveToScreen) => this.setState({ screen: moveToScreen })

    render() {
        return (
            <View style={{ flex: 10 }}>
                {this.state.screen == 'login'
                    ? <Login changeScreen={this.changeScreen} />
                    : <Signup changeScreen={this.changeScreen} />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 16
    }
})