import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native'

const Layout = (props) => {
    const { container } = styles
    return (
        <ScrollView>
            <View style={container}>
                {props.children}
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 30,
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexShrink: 2,
        justifyContent: 'space-around'
    }
})


export { Layout }