import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './style';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene12 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const wolfPage12 = require('../../../assets/animations/page12/wolf_page_12.json');
const narrationScene12 = require('../../../assets/sound/narration/Page12/Page12.mp3');
const scene12JSON = require('../../../assets/animations/page12/page_12.json')

export default function PageTwelve({ navigation }) {

    const animation_wolfBlowing = useRef();
    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound,stopSoundEffects} = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

    //Parando o efeito sonoro da pagina 10
    stopSoundEffects();

    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene12));
        updateVolumSound();
    }, []);

    //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    /**
     * Controle de animação do lobo assoprando a casa
     */
    for (let i = 0; i < 1; i++) {
        animation_wolfBlowing.current?.play(0, 70);
    }
    animation_wolfBlowing.current?.play(70, 145);
    
    function start_animation_wolfBlowing() {
        animation_wolfBlowing.current?.play(145, 299);
        setTimeout(() => {
            animation_wolfBlowing.current?.play(290, 299);
        }, 4000);
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={scene12JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LottieView
                source={wolfPage12}
                ref={animation_wolfBlowing}
                loop={true}
                style={styles.view_wolf}
            />
            <LayoutPages>
                <TouchableOpacity onPress={start_animation_wolfBlowing}>
                    <Animatable.View style={[styles.toggleView, styles.togglewolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                <LegendCaptionArea text={textScene12} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageThirteen" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}