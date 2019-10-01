import React, { Component } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

import ViewFadeIn from '../utilities/ViewFadeIn';

import Jar from './Jar';

export default class JarList extends Component {
    render() {
        return (
            <ViewFadeIn>
                {this.props.jars[0] == 'none'
                    ? <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: 20, textAlign: 'center', textAlignVertical: 'center' }}>Loading Jars...</Text>
                    : (this.props.jars.length == 0
                        ? <Text style={{ fontFamily: 'Comfortaa-Regular', fontSize: 14, textAlign: 'center', textAlignVertical: 'center' }}>{'\n'}You have no jars. Add one by pressing the "New +" tab below!</Text>
                        : this.props.jars.map(jar => <Jar key={jar.id} jar={jar} editJar={this.props.editJar} />)
                    )
                }
            </ViewFadeIn>
        )
    }
}

JarList.propTypes = {
    jars: PropTypes.array,
    editJar: PropTypes.func.isRequired
}
