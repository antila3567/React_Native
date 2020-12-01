import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';
import { w } from '../../../constants'

const ImageCard = ({ data }) => {

    const { h1, cover, container, sub } = styles

    const { name, image } = data

    return (

        <View style={container}>
            <View style={sub}>
                <Image style={cover}
                    source={{
                        uri: image,
                    }}
                />
                <Text style={h1}>{name.toUpperCase()}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: w / 2.4,
        paddingVertical: 10
    },
    sub: {
        shadowColor: '#000',
        borderRadius: 10,
        backgroundColor: 'white',
        shadowRadius: 8,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.4,
        
    },
    h1: {
        paddingTop: 10,
        fontFamily: 'serif',
        fontSize: 18,
        alignSelf: 'center',
        textAlign: 'center'
    },
    cover: {
        width: w / 2.4,
        height: w * 0.63,
        borderRadius: 10
    }
})

export { ImageCard }