// Result of user that he got

import React from 'react';
import {
  View,
  Text
} from 'react-native';

import styles from '../styles';

export default class Result extends React.Component {
    render() {
        return(
            <View style={styles.mainContainer}>
                <Text>You scored {this.props.score}</Text>
            </View>
        );
    }
}

