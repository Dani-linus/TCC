import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import styles from './style';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene9 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene9JSON = require('../../../assets/animations/page9/page_9.json');
const pigs = require('../../../assets/animations/page9/pigs.json')
const wolf = require('../../../assets/animations/page9/wolf.json')

const narrationScene9 = require('../../../assets/sound/narration/Page09/Page9.mp3');

export default function PageNine({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);
    const animation_wolf = useRef();
    const animation_pigs = useRef();

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene9));
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
            animation_pigs.current?.play();
            animation_wolf.current?.reset();
            animation_wolf.current?.play(210, 299);
        }, 7000);
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
                loop={true}
                style={styles.view_wolf}
            />

            <LottieView
                source={pigs}
                ref={animation_pigs}
                loop={false}
                style={styles.view_pigs}
            />

            <LayoutPages>
                <TouchableOpacity onPress={start_animation_wolf}>
                    <Animatable.View style={[styles.toggleView, styles.togglebadWolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                <LegendCaptionArea text={textScene9} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageTen" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}