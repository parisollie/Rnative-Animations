import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback, Animated } from 'react-native';

//Vid 219, es un botón que se hace chico y grande.
const Animacion5 = () => {

    const [ animacion ] = useState( new Animated.Value(1));

    const presionarBtn = () => {
        Animated.spring( animacion, {
            toValue: .8,
            useNativeDriver: false
        } ).start();
    }

    //Vid 220
    const soltarBtn = () => {
        Animated.spring( animacion, {
            toValue: 1,
            friction: 4, // mas bajo, mayor rebote
            tension: 10,
            useNativeDriver: false
        }).start();
    }

    //Creamos nuestro objeto de tipo animacion 
    const estiloAnimacion = {
        transform: [{ scale: animacion }]
    }

    return ( 
        <View style={styles.contenedor}>
            <TouchableWithoutFeedback
                onPressIn={ () => presionarBtn() }
                onPressOut={ () => soltarBtn() }
            >
                <Animated.View style={[styles.btn, estiloAnimacion]}>
                    <Text style={styles.texto} >Iniciar Sesión</Text>
                </Animated.View>
            </TouchableWithoutFeedback>
        </View>
     );
}

const styles = StyleSheet.create({
    contenedor: {
        alignItems: 'center'
    },
    btn: {
        backgroundColor: 'cornflowerblue',
        width: 280,
        height:80,
        justifyContent: 'center',
        alignItems: 'center'
    },
    texto: {
        color: '#FFF',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 28
    }
})
 
export default Animacion5;