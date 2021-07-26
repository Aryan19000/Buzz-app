import React from 'react';
import { Text, View } from 'react-native';
import AppHeader from './AppHeader';

export default class Instagramscreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <AppHeader />
                <Text style={{ color: "blue", fontWeight: "bold", fontFamily: "cursive", fontSize: 48 }}>Instagram</Text>
            </View>
        );
    }
}