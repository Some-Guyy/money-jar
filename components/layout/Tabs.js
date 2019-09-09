import React, { Component, useState, useEffect } from 'react';
import { View, Image, Text, Animated } from 'react-native';

export default class Tabs extends Component {
    render() {
        return (
            <FadeInView style={{ height: '10%', backgroundColor: dominantColor,  justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Rye-Regular', color: accentColor, fontSize: 25 }}>Tabs Here.</Text>
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