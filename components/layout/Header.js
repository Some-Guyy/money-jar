import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import ViewFadeIn from '../utilities/ViewFadeIn';

export default class Header extends Component {
    render() {
        return (
            <ViewFadeIn style={{  flex: 1, backgroundColor: dominantColor, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Rye-Regular', color: accentColor, fontSize: 25 }}>{this.props.header}</Text>
            </ViewFadeIn>
        );
    }
}

Header.propTypes = {
    header: PropTypes.string
}
