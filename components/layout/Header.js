import React, { Component, useState, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        return (
            <FadeInView style={{  flex: 1, backgroundColor: dominantColor, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Rye-Regular', color: accentColor, fontSize: 25 }}>{this.props.header}</Text>
            </FadeInView>
        );
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

Header.propTypes = {
    header: PropTypes.string
}