import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import * as React from 'react';

export default class AppHeader extends React.Component {
  render() {
    return (
      <View >
        <Text style={textStyle.design}>Buzz App</Text>
      </View>
    );
  }
}

const textStyle = StyleSheet.create({
  design: {
    marginBottom: 100,
    //textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: 'black',
  }
});