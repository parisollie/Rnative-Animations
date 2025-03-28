import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
//Vid 215
//import Animacion1 from './components/Animacion1';
//Vid 216
import Animacion2 from './components/Animacion2';
//Vid 217 
//import Animacion3 from './components/Animacion3';
//Vid 218 
//import Animacion4 from './components/Animacion4';
//Vid 219 
//import Animacion5 from './components/Animacion5';
//Vid 221
//import Animacion6 from './components/Animacion6';
//Vid 222 
//import Animacion7 from './components/Animacion7';

const App = () => {
  return (
    <>
      <View style={styles.contenido}>
        <Animacion2 />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  contenido: {
    marginTop: 100
  }
});

export default App;
