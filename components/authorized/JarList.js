import React, { Component, useState, useEffect } from 'react';
import { Text, Animated } from 'react-native';
import PropTypes from 'prop-types';

import Jar from './Jar';

export default class JarList extends Component {
    render() {
        return (
            <FadeInView>
                {this.props.jars[0] == 'none'
                    ? <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: 20, textAlign: 'center', textAlignVertical: 'center' }}>Loading Jars...</Text>
                    : (this.props.jars.length == 0
                        ? <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: 14, textAlign: 'center', textAlignVertical: 'center' }}>You have no jars. Add one by pressing "New +" on the tabs below!</Text>
                        : this.props.jars.map(jar => <Jar key={jar.id} jar={jar} editJar={this.props.editJar} />)
                    )
                }
            </FadeInView>
        )
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

JarList.propTypes = {
    jars: PropTypes.array,
    editJar: PropTypes.func.isRequired
}