import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene10 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene10JSON = require('../../../assets/animations/page10/page_10.json');
const narrationScene10 = require('../../../assets/sound/narration/Page10/Page10.mp3');
const wolfBlowing = require('../../../assets/animations/page10/wolfBlowingTheWoodenHouse.json');

export default function PageTen({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene10));
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 3500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    /**
     * LOBO ASSOPRANDO A CASA DE MADEIRA
     * inicia em 0-135
     * ao tocar vai de 135-299
     * loop para 290-299
     * 
     */

    const animation_wolfBlowing = useRef();

    function start_animation_wolfBlowing() {
        animation_wolfBlowing.current?.play(135, 299);
    }
     animation_wolfBlowing.current?.play(0, 135);
    
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
                  {/* controle de animação 1 */}
                  <TouchableNativeFeedback onPress={start_animation_wolfBlowing}>
                    <Animatable.View style={[styles.toggleView, styles.togglewolfBlowing]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableNativeFeedback>

                <LegendCaptionArea text={textScene10} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageEleven" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}