import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion1 = () => {

    //Vid 215
    const [ animacion ] = useState( new Animated.Value(0) );

    //Usse effect siempre es un arrow funcition 
    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 1,  // al valor al que llega
                duration: 50, // cantidad de tiempo en llegar
                useNativeDriver: false
            }
        ).start(); // iniciar la animación
    }, []);


    return ( //Le agregamos la animacion 
        <Animated.View
            style={{
                //Vas animar el opacity
                opacity: animacion
            }}
        >
            <Text style={styles.texto}>Animacion 1</Text>
        </Animated.View>
     );
}

const styles = StyleSheet.create({
    texto: {
        fontSize: 30,
        textAlign: 'center'
    }
})
 
export default Animacion1;