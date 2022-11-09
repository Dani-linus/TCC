import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene14 } from '../legendTextFile';
import * as Animatable from "react-native-animatable";


const narrationScene14 = require('../../../assets/sound/narration/Page14/Page14.mp3');
const scene14JSON = require('../../../assets/animations/page14/page_14.json');
const cauldronJSON = require('../../../assets/animations/page14/cauldron.json');

export default function PageFourteen({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene14));
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 3500);
        return () => {
            clearTimeout(timer);
        };
    }, []);
    // frames do caldeirão
    /*
    1- não fica em loop
    2 - inicia em 0-150
    3 - interação pra acender o fogo e o lobo descer - 150-300
    4 -  volta em loop no fogo 150-200
    */
    const animation_cauldron = useRef();

    animation_cauldron.current?.play(1, 150);

    function startCauldron() {
        animation_cauldron.current?.play(150, 300);
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={scene14JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LottieView
                source={cauldronJSON}
                ref={animation_cauldron}
                style={styles.view_caldeirao}
            />

            <LayoutPages>
                {/* controle de animação 1 */}
                <TouchableNativeFeedback onPress={startCauldron}>
                    <Animatable.View style={[styles.toggleView, styles.toggleCauldron]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableNativeFeedback>

                <LegendCaptionArea text={textScene14} />
                <ButtonNavigation proxRoute="PageFifteen" navigation={navigation} showComponent={true} />
            </LayoutPages>
        </View >
    )
}