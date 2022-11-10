import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import ButtonNavigation from 'components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene7 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene7JSON = require('../../../assets/animations/page7/page_7.json');
const pig_speak = require('../../../assets/animations/page7/pig_speak.json');
const wolf = require('../../../assets/animations/page7/wolf.json');
const narrationScene7 = require('../../../assets/sound/narration/Page07/Page7.mp3');

export default function PageSeven({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);
    const animation_wolf = useRef();
    const animation_pig = useRef();

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene7));
        updateVolumSound();
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    animation_wolf.current?.play(210, 299);
    
    function start_animation_wolf() {
        animation_wolf.current?.play(0, 299);
        setTimeout(() => {
            animation_pig.current?.play();
            animation_wolf.current?.reset();
            animation_wolf.current?.play(210, 299);
        }, 7000);
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={scene7JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LottieView
                source={pig_speak}
                loop={false}
                ref={animation_pig}
                style={styles.view_pig_speak}
            />
            <LottieView
                source={wolf}
                ref={animation_wolf}
                style={styles.view_wolf}
            />
            <LayoutPages>
                <TouchableOpacity onPress={start_animation_wolf}>
                    <Animatable.View style={[styles.toggleView, styles.togglebadWolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                <LegendCaptionArea text={textScene7} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageEight" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}