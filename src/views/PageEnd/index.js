import React,{useContext} from 'react';
import { View, Text, TouchableOpacity, BackHandler } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
const end = require('../../../assets/animations/end/fireworks.json');
const text = 'EBAAAAA... VOCÊ TERMINOU A LEITURA DA HISTÓRIA';
const soundFile =  require('../../../assets/sound/soundEffects/firewokrs.mp3')

export default function PageEnd() {

    const { stopSoundNarration } = useContext(SoundNarrationContext);
    const { stopSound, initSoundEffects,stopSoundEffects} = useContext(SoundContext);
    
    const navigation = useNavigation();

    stopSoundNarration();
    stopSound();
    initSoundEffects(soundFile)

    const goBack = () => {
        navigation.popToTop();
        stopSoundEffects();
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={end}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <View style={styles.messageEnd}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={2000}
                    duration={1000}
                    style={styles.txt1}>
                        {text}
                </Animatable.Text>
            </View>
            <View style={styles.btnEnd}>
                <Animatable.View
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={4000}
                    duration={1000}>
                        
                    <TouchableOpacity style={styles.btn} onPress={goBack}>
                        <Text style={styles.text_black}>RECOMEÇAR A LEITURA</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} onPress={() => BackHandler.exitApp()}>
                        <Text style={styles.text_black}>SAIR</Text>
                    </TouchableOpacity>
                </Animatable.View>
            </View>
        </View>
    )
}