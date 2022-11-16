import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import foto from 'C:\alice\assets\fotoperfil-alice.jpg'

export default function App() {
    return (
        <View style ={StyleSheet.container}>
            <Image source={foto} style={{ width: 305, height: 159 }} />

            <Text style={{color: '#888', fontSize: 18}}>
                Alice Oliveira Domingues
            </Text>
        </View>

    );
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    "Splash":{
        "image": 'C:\alice\assets\fotoperfil-alice.jpg',
        "resizeMode": "contain",
        "backgroundColor" : "#000000"
    },
});
