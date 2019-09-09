import React, { Component } from 'react';
import { View } from 'react-native';
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
                    ? <Login changeScreen={this.changeScreen} checkCredentials={this.props.checkCredentials} />
                    : <Signup changeScreen={this.changeScreen} checkCredentials={this.props.checkCredentials} />
                }
            </View>
        );
    }
}

Anonymous.propTypes = {
    checkCredentials: PropTypes.func.isRequired
}