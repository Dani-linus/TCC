import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, Touchable, Animated, PanResponder,TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';


export default class Cena1 extends React.Component {
    constructor(props) {
        super(props);
        this.startAnimation();
    }

    state = {
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 7000,
            useNativeDriver: true,
        }).start();
    }

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

        this.sound.loadAsync(require('../sound/ronco_porco.mp3'), status, false);
    }

    //PLAY NO SOM
    playSound() {
        this.sound.playAsync();
    }
    
    render() {

        const animatedStyles = {
            opacity: this.state.animation
        }
        return (
            <View style={styles.container}>
                <Animated.View style={[animatedStyles]}>

                    <ImageBackground
                        source={require('../assets/scenes/CENA1.jpg')}
                        style={{ width: 854, height: 500 }}>

                        <View style={[styles.viewtxt]}>
                            <Text style={styles.txtHistoria}>
                                Era uma vez três porquinhos que viviam com seus pais nos campos encantados.{'\n'}
                            </Text>
                            <Text style={styles.txtHistoria}>
                                Os porquinhos estavam muito felizes, e conforme cresciam, se tornaram{'\n'}
                                cada vez mais independentes.
                            </Text>
                        </View>
                        <TouchableWithoutFeedback onPress={this.playSound.bind(this)} >
                            <View>
                                <Image
                                    source={require('../assets/img/teste_porquinho.png')}
                                    style={{ left: 714, marginTop: 212 }}>
                                </Image>
                            </View>
                        </TouchableWithoutFeedback>
                    </ImageBackground>
                </Animated.View>
            </View>
        )
    }
}