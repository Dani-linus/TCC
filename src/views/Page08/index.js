import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene8 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene8JSON = require('../../../assets/animations/page8/page_8.json');
const narrationScene8 = require('../../../assets/sound/narration/Page08/Page8.mp3');
const wolfBlowing = require('../../../assets/animations/page8/wolfBlowingTheStrawHouse.json');

export default function PageEight({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene8));
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
     * LOBO ASSOPRANDO A CASA DE PALHA
     * inicia em 0-145
     * aguarda toque e vai de 145-299
     * volta em loop 282-299
     */

    const animation_wolfBlowing = useRef();
    
    animation_wolfBlowing.current?.play(0, 145);

    function start_animation_wolfBlowing() {
        animation_wolfBlowing.current?.play(145, 299);
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={scene8JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />

            <LottieView
                source={wolfBlowing}
                ref={animation_wolfBlowing}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                style={styles.view_wolfBlowing}
            />
            <LayoutPages>
                 {/* controle de animação 1 */}
                 <TouchableNativeFeedback onPress={start_animation_wolfBlowing}>
                    <Animatable.View style={[styles.toggleView, styles.togglebadWolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableNativeFeedback>

                <LegendCaptionArea text={textScene8} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageNine" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}