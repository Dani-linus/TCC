import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import ButtonNavigation from 'components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene7 } from '../legendTextFile';

const scene7JSON = require('../../../assets/animations/page7/page_7.json');
const pig_speak = require('../../../assets/animations/page7/pig_speak.json');
const wolf = require('../../../assets/animations/page7/wolf.json');
const narrationScene7 = require('../../../assets/sound/narration/Page07/Page7.mp3');

export default function PageSeven({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene7));
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 3500);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    const animation_wolf = useRef();
    
    function start_animation_wolf() {
        animation_wolf.current?.play();
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={scene7JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <View style={styles.view_pig_speak}>
                <LottieView
                    source={pig_speak}
                    autoPlay={true}
                    resizeMode='cover' />
            </View>
            <View style={styles.view_wolf}>
                <TouchableNativeFeedback onPress={start_animation_wolf}>
                    <LottieView
                        source={wolf}
                        resizeMode='cover' />
                </TouchableNativeFeedback>
            </View>
            <LayoutPages>
                <LegendCaptionArea text={textScene7} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageEight" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}