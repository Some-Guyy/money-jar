import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import DismissKeyboard from '../utilities/DismissKeyboard';
import Login from './Login';
import Signup from './Signup';

export default class Anonymous extends Component {
    state = {
        screen: 'login'
    }

    changeScreen = (moveToScreen) => this.setState({ screen: moveToScreen })

    render() {
        return (
            <DismissKeyboard>
                <View style={{ flex: 10 }}>
                    {this.state.screen == 'login'
                        ? <Login changeScreen={this.changeScreen} login={this.props.login} />
                        : <Signup changeScreen={this.changeScreen} signup={this.props.signup} />
                    }
                </View>
            </DismissKeyboard>
        );
    }
}

Anonymous.propTypes = {
    signup: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired
}