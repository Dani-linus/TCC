import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import styles from './style';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene9 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene9JSON = require('../../../assets/animations/page9/page_9.json');
const pigs = require('../../../assets/animations/page9/pigs.json')
const wolf = require('../../../assets/animations/page9/wolf.json')

const narrationScene9 = require('../../../assets/sound/narration/Page09/Page9.mp3');

export default function PageNine({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene9));
    }, []);

    //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);


    const animation_wolf = useRef();
    const animation_pigs = useRef();

    function start_animation_pigs() {
        animation_pigs.current?.play();
    }

    function start_animation_wolf() {
        animation_wolf.current?.play();
        setTimeout(() => {
            animation_pigs.current?.play();
        }, 6000);
    }
    return (
        <View style={styles.container}>
            <LottieView
                source={scene9JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />

            <LottieView
                source={wolf}
                ref={animation_wolf}
                style={styles.view_wolf}
            />

            <LottieView
                source={pigs}
                ref={animation_pigs}
                style={styles.view_pigs}
            />

            {/* a animação dos porcos precisa esperar o lobo bater na porta e pedir pra abrir */}
            <LayoutPages>
                {/* controle de animação 1 */}
                <TouchableNativeFeedback onPress={start_animation_wolf}>
                    <Animatable.View style={[styles.toggleView, styles.togglebadWolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableNativeFeedback>

                <LegendCaptionArea text={textScene9} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageTen" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}