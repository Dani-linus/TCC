import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene10 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene10JSON = require('../../../assets/animations/page10/page_10.json');
const narrationScene10 = require('../../../assets/sound/narration/Page10/Page10.mp3');
const wolfBlowing = require('../../../assets/animations/page10/wolfBlowingTheWoodenHouse.json');
const soundEffects = require('../../../assets/sound/soundEffects/blowing.mp3');

export default function PageTen({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound , playSoundEffects} = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);
    const animation_wolfBlowing = useRef();

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene10));
        updateVolumSound();
    }, []);

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
        playSoundEffects();
        setTimeout(() => {
            animation_wolfBlowing.current?.play(290, 299);
        }, 4000);
    }
    return (
        <View style={styles.container}>
            <LottieView
                source={scene10JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LottieView
                source={wolfBlowing}
                ref={animation_wolfBlowing}
                loop={true}
                style={styles.view_wolfBlowing}
            />
            <LayoutPages>
                <TouchableOpacity onPress={start_animation_wolfBlowing}>
                    <Animatable.View style={[styles.toggleView, styles.togglewolfBlowing]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                <LegendCaptionArea text={textScene10} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageEleven" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}