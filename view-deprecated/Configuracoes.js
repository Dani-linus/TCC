import React, { useState } from 'react';
import {
    Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, Button, StyleSheet, Switch, TouchableWithoutFeedback
} from 'react-native';
import styles from '../view/Estilo';
import { Audio } from 'expo-av';

//so pra apagar a branch
export default class Configuracoes extends React.Component {
    constructor(props) {
        super(props);
        this.btnVoltar = this.btnVoltar.bind(this);
        
    }
  
    btnVoltar() {
        this.props.navigation.goBack(null);
    }
    //ABAIXO CODIGO PARA INICIAR O COMPONENTE SWITCH  
    state = { switchValue: false };

    toggleSwitch2 = value => {
        this.setState({ switchValue: value });
        {
            this.state.switchValue ?
                this.stopSound(this) : this.playSound(this)
        }
    };
  
  //PLAY NO SOM
  playSound() {
    this.sound.playAsync();
  }

  stopSound(){
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
                            onValueChange={this.toggleSwitch1}
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
                                value={this.state.switchValue2}
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