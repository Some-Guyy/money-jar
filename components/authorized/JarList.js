import React, { Component, useState, useEffect } from 'react';
import { Animated } from 'react-native';
import PropTypes from 'prop-types';

import Jar from './Jar';

export default class JarList extends Component {
    render() {
        return this.props.jars.map((jar) => (
            <FadeInView key={jar.id}>
                <Jar jar={jar} editJar={this.props.editJar} />
            </FadeInView>
        ));
    }
}

const FadeInView = (props) => {
    const [fadeAdmin] = useState(new Animated.Value(0))  // Initial value for opacity: 0

    useEffect(() => {
        Animated.timing(
            fadeAdmin,
            {
                toValue: 1,
                duration: 1000,
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

JarList.propTypes = {
    jars: PropTypes.array,
    editJar: PropTypes.func.isRequired
}