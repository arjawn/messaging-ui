import { Constants } from 'expo';
import {
    NetInfo,
    Platform,
    StatusBar,
    StyleSheet,
    Text,
    View
} from 'react-native';
import React from 'react';

export default class Status extends React.Component {
    state = {
        isConnected: false
    };

    render() {
        const { isConnected } = this.state;

        const backgroundColor = isConnected ? 'white' : 'red';

        // eslint-disable-next-line no-console
        console.log('here');

        if (Platform.OS === 'ios') {
            // eslint-disable-next-line no-console
            console.log('here');
            return <View style={[styles.status, { backgroundColor }]} />;
        }

        return null; // Temporary
    }
}

const statusHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;

const styles = StyleSheet.create({
    status: {
        zIndex: 1, // indicates this View should be drawn on top of other content
        height: statusHeight
    }
});
