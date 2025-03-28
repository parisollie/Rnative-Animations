import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated, View  } from 'react-native';

//Vid 218 , creamos una rotacion de 0grados a 360 º, es un caja que gira.
const Animacion3 = () => {

    const [ animacion ] = useState( new Animated.Value(0) );

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 360,  // al valor al que llega
                duration: 500, // cantidad de tiempo en llegar
                useNativeDriver: false
            }
        ).start(); // iniciar la animación
    }, []);

    const interpolacion = animacion.interpolate({
        inputRange: [0, 360],
        outputRange: ['0deg', '360deg']
    });

    //hago un constante estilo animacion
    const estiloAnimacion = {
        transform: [{ rotate: interpolacion }]
    }


    return ( 
        <View>
            <Animated.View 
                style={[styles.caja, estiloAnimacion ]}//Le pasamos nuestra animacion 
            ></Animated.View>
        </View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion3;