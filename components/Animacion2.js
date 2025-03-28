import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, Animated } from 'react-native';

const Animacion2 = () => {

    //Vid 216 , hacemos una caja grande
    const [ animacion ] = useState( new Animated.Value(0) );

    useEffect(() => {
        Animated.timing(
            animacion, {
                toValue: 450,  // al valor al que llega
                duration: 1000 ,// cantidad de tiempo en llegar en 1 segundo. 
                useNativeDriver: false
            }
        ).start(); // iniciar la animación
    }, []);


    return ( 
        <Animated.View
            style={[
                styles.caja,
                { 
                    width: animacion,
                    height: animacion
                }
            ]}
        ></Animated.View>
     );
}

const styles = StyleSheet.create({
    caja: {
        width: 100,
        height: 100,
        backgroundColor: 'cornflowerblue'
    }
})
 
export default Animacion2;