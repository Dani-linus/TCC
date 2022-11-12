//Página 1 do livro
import React, { useRef, useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import LegendCaptionArea from 'components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundContext } from 'contextAPI/sound';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene1 } from 'views/legendTextFile';

// imports dos arquivos JSON das animações
const pigMomJSON = require('../../../assets/animations/page1/pig_mom.json');
const pigSleepingJSON = require('../../../assets/animations/page1/pig_sleepling.json');
const scene1JSON = require('../../../assets/animations/page1/page_1.json');
const narrationScene1 = require('../../../assets/sound/narration/Page01/Page1.mp3');

export default function PageOne({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);
    const animation_pig_mom = useRef();
    const animation_pig_spleeping = useRef();

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

   useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene1));
        updateVolumSound();
    }, []);

    //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    animation_pig_spleeping.current?.play(0, 120);
    animation_pig_mom.current?.play(0, 48);

    function startAnimationPigMom() {
        animation_pig_mom.current?.play(48, 100);
        setTimeout(() => {
            animation_pig_mom.current?.play(0, 48);
        }, 5450);
    }

    function startAnimationPigSleeping() {
        animation_pig_spleeping.current?.play(120, 299);
        setTimeout(() => {
            animation_pig_spleeping.current?.play(0, 120);
        }, 4500);
    }

    return (

        <View style={styles.container}>
            <LottieView
                source={scene1JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />

            <LottieView
                source={pigMomJSON}
                ref={animation_pig_mom}
                style={styles.view_pig_mom}
            />
            <LottieView
                source={pigSleepingJSON}
                ref={animation_pig_spleeping}
                style={styles.view_pig_sleepling}
            />

            <LayoutPages navigation={navigation}>

                {/* controle de animação 1 */}
                <TouchableOpacity onPress={startAnimationPigMom}>
                    <Animatable.View style={[styles.toggleView, styles.togglePigMom]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                {/* controle de animação 2 */}
                <TouchableOpacity onPress={startAnimationPigSleeping}>
                    <Animatable.View style={[styles.toggleView, styles.togglePigSleeping]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                <LegendCaptionArea text={textScene1} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageTwo" navigation={navigation} showComponent={false} />}
            </LayoutPages>
        </View >
    )
}

