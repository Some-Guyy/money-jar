import React, { Component, useState, useEffect } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Animated } from 'react-native';
import PropTypes from 'prop-types';

export default class Profile extends Component {
    jarArray = this.props.jars.map((jar) => (jar.value));

    render() {
        return (
            <FadeInView style={{ alignItems: 'center' }}>
                <View style={{ height: '10%' }}></View>
                <Text style={[styles.bodyText, { height: '8%', fontSize: 24 }]}>User's Profile</Text>
                <View style={{ height: '10%' }}></View>
                <View style={{ height: '8%', flexDirection: 'row' }}>
                    <Text style={[styles.bodyText, { fontSize: 20 }]}>Jar Net Worth: $</Text>
                    <Text style={[styles.bodyText, { fontSize: 20 }]}>
                        {this.jarArray.reduce((accumulator, currentValue) => {return accumulator + currentValue}, 0).toFixed(2)}
                    </Text>
                </View>
                <View style={{ height: '45%' }}></View>
                <TouchableOpacity onPress={this.props.logout.bind(this)} style={{ height: '9%', width: '30%', alignItems: 'center', backgroundColor: warnColor, padding: 10 }}>
                    <Text style={[styles.bodyText, { color: accentColor }]}>Log out</Text>
                </TouchableOpacity>
                <View style={{ height: '10%' }}></View>
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