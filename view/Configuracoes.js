import React, { useState } from 'react';
import {
    Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, Button, StyleSheet, Switch, TouchableWithoutFeedback
} from 'react-native';
import styles from '../view/Estilo';
//import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';

//so pra apagar a branch
export default class Configuracoes extends React.Component {
    constructor(props) {
        super(props);
        this.btnVoltar = this.btnVoltar.bind(this);
    }

    btnVoltar() {
        this.props.navigation.navigate('Menu')
    }
    //ABAIXO CODIGO PARA INICIAR O COMPONENTE SWITCH  
    state = { switchValue: false };

    toggleSwitch = value => {
        this.setState({ switchValue: value });
        {
            this.state.switchValue ?
                this.stopSound(this) : this.playSound(this)
        }
    };
    //CARREGANDO A FONTE E O AUDIO
    async componentDidMount() {
        Audio.setAudioModeAsync({
            allowsRecordingIOS: false,
            staysActiveInBackground: true,
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,
            shouldDuckAndroid: true,
            staysActiveInBackground: true,
            playsThroughEarpieceAndroid: true,
            allowsRecordingIOS: true,
            interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
            playsInSilentModeIOS: true,
        });

        this.sound = new Audio.Sound();

        const status = {
            shouldPlay: false

        };

        this.sound.loadAsync(require('../sound/som_ambiente.mp3'), status, false);
    }

    //PLAY NO SOM
    playSound() {
        this.sound.playAsync();
    }

    //STOP NO SOM
    stopSound() {
        this.sound.pauseAsync();
    }
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/img/fundo.png')}
                    style={styles.capa}>
                    <View style={styles.retangulo}>
                        <TouchableWithoutFeedback onPress={this.btnVoltar}
                        >
                            <View>
                                <Image
                                    source={require('../assets/icones/x.png')}
                                    style={styles.buttonSair}>
                                </Image>
                            </View>
                        </TouchableWithoutFeedback>
                        <Text style={styles.configTextDefi}>Definições</Text>
                        <Image
                            source={require('../assets/icones/microfone.png')} style={styles.imgNarracao}>
                        </Image>
                        <Text style={styles.configText}>Narração</Text>
                        <Switch
                            style={styles.slider_som}
                            onValueChange={this.toggleSwitch}
                            value={this.state.switchValue}
                            trackColor={{ false: '#D9D9D9', true: '#56B2EB' }}
                            thumbColor={this.toggleSwitch ? "#56B2EB" : "#f4f3f4"}
                        />
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
