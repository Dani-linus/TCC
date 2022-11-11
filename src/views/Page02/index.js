import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import LayoutPages from 'components/LayoutPages';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import ButtonNavigation from 'components/ButtonNavigation'
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene2 } from 'views/legendTextFile';

const pigMomPigFatherJSON = require('../../../assets/animations/page2/pig_father_pig_mom.json');
const scene2JSON = require('../../../assets/animations/page2/page_2.json');
const narrationScene2 = require('../../../assets/sound/narration/Page02/Page2.mp3');

export default function PageTwo({ navigation }) {
    const animation_pig_father_pig_mom = useRef();
    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene2));
        updateVolumSound();
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    animation_pig_father_pig_mom.current?.play(0, 140);

    function startAnimationPigFatherPigMom() {
        animation_pig_father_pig_mom.current?.play(140, 299);
        setTimeout(() => {
            animation_pig_father_pig_mom.current?.reset()
            animation_pig_father_pig_mom.current?.play(0, 140);
        }, 5000);
    }
    return (
        <View style={styles.container}>

            <LottieView
                source={scene2JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            ></LottieView>

            <LottieView
                source={pigMomPigFatherJSON}
                ref={animation_pig_father_pig_mom}
                style={styles.pig_father_pig_mom}
            ></LottieView>

            <LayoutPages>

                <TouchableOpacity onPress={startAnimationPigFatherPigMom}>
                    <Animatable.View style={[styles.toggleView, styles.togglePigs]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>

                <LegendCaptionArea text={textScene2} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageThree" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}

