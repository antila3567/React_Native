import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = ({ title }) => {
    //STYLES DRY
    const { viewStyle, header } = styles


    return (
        <View style={viewStyle}>
            <Text style={header}>{title}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    viewStyle: {
        height:106,
        backgroundColor: '#3939ab',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 100, height: 100 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    header: {
        paddingTop: 20,
        fontSize: 35,
        color: '#fff',
        paddingLeft: 22,
        fontFamily: 'serif'
    }
});

export { Header }
