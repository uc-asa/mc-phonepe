import React from 'react';
import {
  View,
  Button,
} from 'react-native';

import styles from '../styles';
import Header from './Heder';

export default class LevelSelection extends Header {
    action(type = 'easy') {
        let grid = {};
        if (type === 'easy') {
            grid = {
                row: 3,
                col: 2
            };
        }
        if (type === 'medium') {
            grid = {
                row: 4,
                col: 3
            };
        }
        if (type === 'hard') {
            grid = {
                row: 5,
                col: 4
            };
        }
        this.props.navigation.navigate('game', {data: grid});
    }
    render() {
        return(
            <View style={styles.mainContainer}>
                <View style={styles.button}>
                    <Button
                        onPress={this.action.bind(this, 'easy')}
                        title={'Easy'}
                        style={{ marginTop: 12 }}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={this.action.bind(this, 'medium')}
                        title={'medium'}
                    />
                </View>
                <View style={styles.button}>
                    <Button
                        onPress={this.action.bind(this, 'hard')}
                        title={'Hard'}
                    />
                </View>
            </View>
        );
    }
}

