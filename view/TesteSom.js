import React, { useState } from 'react';
import {
    Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, Button, StyleSheet, Switch, AppState
} from 'react-native';
import styles from '../view/Estilo';
//import Slider from '@react-native-community/slider';
import * as Font from 'expo-font';
import { Audio } from 'expo-av';
import App from '../App';

let customFonts = {
    'PatrickHand': require('../src/assets/font/PatrickHand-Regular.ttf')
};

export default class TesteSom extends React.Component {

    //ABAIXO CODIGO PARA INICIAR O COMPONENTE SWITCH  
    state = { switchValue: false };
    toggleSwitch = value => {
        this.setState({ switchValue: value });
        {
            this.state.switchValue ?
                AppState.this.stopSound(this) : App.this.playSound(this)
        }
    }
    render() {
    
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/img/fundo.png')}
                    style={styles.capa}>
                    <View style={styles.retangulo}>
                        <TouchableOpacity onPress={this.irConfig}
                        >
                            <View>
                                <Image
                                    source={require('../assets/icones/x.png')}
                                    style={styles.buttonSair}>
                                </Image>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.configTextDefi}>Definições</Text>
                        <Image
                            source={require('../assets/icones/microfone.png')} style={styles.imgNarracao}>
                        </Image>
                        <Text style={styles.configText}>Narração</Text>

                        <Text
                            style={styles.configTextSom}>Som ambiente</Text>
                        <Image
                            source={require('../assets/icones/musica.png')} style={styles.imgSom}>
                        </Image>

                        <View>
                        <Switch
                            style={styles.slider_som}
                            onValueChange={this.toggleSwitch}
                            value={this.state.switchValue}
                            trackColor={{ false: '#D9D9D9', true: '#56B2EB' }}
                            thumbColor={this.toggleSwitch ? "#56B2EB" : "#f4f3f4"}
                        />
                        </View>
                        
                    </View>
                </ImageBackground>

            </View>


        );
    }
}
