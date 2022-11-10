import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import LegendCaptionArea from 'components/LegendTextArea';
import * as Animatable from 'react-native-animatable';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene6 } from '../legendTextFile';

const scene6JSON = require('../../../assets/animations/page6/page_6.json')
const badWolfJSON = require('../../../assets/animations/page6/bad-wolf.json')
const narrationScene6 = require('../../../assets/sound/narration/Page06/Page6.mp3');

export default function PageSix({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [save, setSave] = useState(true);
    const firstRun = useRef(true);
    const animation_badWolf = useRef();
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene6));
        updateVolumSound();
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

   
    animation_badWolf.current?.play(0, 29);

    function startAnimationWolf() {
        animation_badWolf.current?.play(29, 99);
        setTimeout(() => {
            animation_badWolf.current?.play(40, 99);
        }, 7000);
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={scene6JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />

            <LottieView
                source={badWolfJSON}
                ref={animation_badWolf}
                loop={true}
                resizeMode='cover'
                style={styles.badWolfStyle}
            />

            <LayoutPages>
                <TouchableOpacity onPress={startAnimationWolf}>
                    <Animatable.View style={[styles.toggleView, styles.togglebadWolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                <LegendCaptionArea text={textScene6} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageSeven" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}