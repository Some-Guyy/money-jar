import React, { Component } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableNativeFeedback, TouchableOpacity, Alert } from 'react-native';
import PropTypes from 'prop-types';

import ViewFadeIn from '../utilities/ViewFadeIn';

export default class Profile extends Component {
    state = {
        deletingAcc: false
    }
    jarArray = this.props.jars.map(jar => jar.value);

    toggleDeletingAcc = _ => {
        Alert.alert(
            'Warning',
            "Are you sure you want to delete your account? All of your account info will not be recoverable.",
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    onPress: _ => this.setState(prevState => ({ deletingAcc: !prevState.deletingAcc }))
                }
            ],
            { cancelable: true }
        );
    }

    render() {
        return (
            <ViewFadeIn style={{ alignItems: 'center' }}>
                <View style={{ height: '5%' }}></View>
                <View style={{ height: '81%' }}>
                    <Text style={[styles.bodyText, { fontSize: 24 }]}>Profile</Text>
                    <Text style={styles.bodyText}>Email: {this.props.user.email}</Text>
                    <Text style={styles.bodyText}>Jar Net Worth{
                        isNaN(this.jarArray.reduce((accumulator, currentValue) => { return parseFloat(accumulator) + parseFloat(currentValue) }, 0).toFixed(2))
                            ? " hasn't yet loaded, please go back to the Jars tab below to load your jars before coming back."
                            : ": $" + this.jarArray.reduce((accumulator, currentValue) => { return parseFloat(accumulator) + parseFloat(currentValue) }, 0).toFixed(2)
                    }</Text>
                    <TouchableOpacity onPress={this.props.resetPwd}>
                        <Text style={[styles.bodyText, { color: dominantColor, textDecorationLine: 'underline' }]}>
                            {'\n\n'}Reset Password{'\n'}
                        </Text>
                    </TouchableOpacity>
                    {!this.state.deletingAcc ? <DeleteAccNotice toggleDeletingAcc={this.toggleDeletingAcc} /> : <DeleteAccInput deleteAcc={this.props.deleteAcc} />}
                </View>
                <TouchableNativeFeedback onPress={this.props.logout.bind(this)} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '9%', width: '30%', alignItems: 'center', backgroundColor: warnColor, padding: 10 }}>
                        <Text style={[styles.bodyText, { color: accentColor }]}>Log out</Text>
                    </View>
                </TouchableNativeFeedback>
                <View style={{ height: '5%' }}></View>
            </ViewFadeIn>
        )
    }
}

class DeleteAccNotice extends Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.toggleDeletingAcc.bind(this)}>
                <Text style={[styles.bodyText, { color: warnColor, textDecorationLine: 'underline' }]}>
                    Delete Account
                </Text>
            </TouchableOpacity>
        )
    }
}

class DeleteAccInput extends Component {
    state = {
        passwordField: ''
    }

    render() {
        return (
            <View style={{ alignItems: 'center' }}>
                <Text style={[styles.bodyText, { fontSize: 16 }]}>
                    <Text>You are required to confirm your password if you wish to delete your account. Warning: This action is </Text>
                    <Text style={{ color: warnColor }}>irreversible!{'\n'}</Text>
                </Text>
                <TextInput value={this.state.passwordField} secureTextEntry={true} placeholder={'Confirm Password'} onChangeText={text => { this.setState({ passwordField: text }) }} style={[styles.bodyText, { height: '17%', width: '50%', borderColor: dominantColor, borderWidth: 1, textAlign: 'left' }]} />
                <View style={{ height: '5%' }} />
                <TouchableNativeFeedback onPress={this.props.deleteAcc.bind(this, this.state.passwordField)} background={TouchableNativeFeedback.Ripple()}>
                    <View style={{ height: '22%', width: '30%', alignItems: 'center', justifyContent: 'center', backgroundColor: warnColor, padding: 10 }}>
                        <Text style={[styles.bodyText, { color: accentColor }]}>Delete{'\n'}Account</Text>
                    </View>
                </TouchableNativeFeedback>
            </View >
        )
    }
}

const styles = StyleSheet.create({
    bodyText: {
        fontFamily: 'Comfortaa-Regular',
        fontSize: 18,
        textAlign: 'center'
    }
})

Profile.propTypes = {
    user: PropTypes.object.isRequired,
    jars: PropTypes.array,
    logout: PropTypes.func.isRequired,
    resetPwd: PropTypes.func.isRequired,
    deleteAcc: PropTypes.func.isRequired
}

DeleteAccNotice.propTypes = {
    toggleDeletingAcc: PropTypes.func.isRequired
}

DeleteAccInput.propTypes = {
    deleteAcc: PropTypes.func.isRequired
}
