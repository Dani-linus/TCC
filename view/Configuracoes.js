import React, { useState } from 'react';
import {
    Text, View, TouchableOpacity, Image, SafeAreaView, ImageBackground, Button
} from 'react-native';
import styles from '../view/Estilo';
import Slider from '@react-native-community/slider';
import * as Font from 'expo-font';


let customFonts = {
    'PatrickHand': require('../fonts/PatrickHand-Regular.ttf')
};

export default class Configuracoes extends React.Component {
    state = {
        fontsLoaded: false,
    };

    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount() {
        this._loadFontsAsync();
    }
    render() {
        if (!this.state.fontsLoaded) {
            return null;
        }

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
                        <Slider
                            style={styles.slider}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#56B2EB"
                            maximumTrackTintColor="#D9D9D9"
                            thumbTintColor="#56B2EB"
                        />
                        <Text style={styles.configTextSom}>Som ambiente</Text>
                        <Image
                            source={require('../assets/icones/musica.png')} style={styles.imgSom}>
                        </Image>
                        <Slider
                            style={styles.slider_som}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#56B2EB"
                            maximumTrackTintColor="#D9D9D9"
                            thumbTintColor="#56B2EB"
                        />
                    </View>
                </ImageBackground>

            </View>


        );
    }
}
