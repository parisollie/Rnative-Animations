import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View  } from 'react-native';

const Animacion3 = () => {

    //Vid 217, hacemos la letra mas grande de un texto.
    const [ animacion ] = useState( new Animated.Value(14) );

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 40,  // al valor al que llega
                duration: 500, // cantidad de tiempo en llegar 1/2 segundo
                useNativeDriver: false
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        <View>
            <Animated.Text 
                style={[styles.texto, { fontSize: animacion }]}
            >Animacion 1</Animated.Text>
        </View>
     );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
 
export default Animacion3;