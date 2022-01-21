import React from 'react';
import { StyleSheet, StatusBar, View } from 'react-native';

const AndroidStatusBar = ({ backgroundColor }) => {
    return (
        <View style={[styles.statusBar, backgroundColor]}>
            <StatusBar backgroundColor={backgroundColor} />
        </View>
    );
};

const BAR_HEIGHT = StatusBar.currentHeight;

const styles = StyleSheet.create({
    statusBar: {
        height: BAR_HEIGHT
    },
});

export default AndroidStatusBar;