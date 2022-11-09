import React, { useContext, useEffect, useState , useRef} from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene11 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene11JSON = require('../../../assets/animations/page11/page_11.json');
const narrationScene11 = require('../../../assets/sound/narration/Page11/Page11.mp3');
const pigs = require('../../../assets/animations/page11/pigs.json');
const wolf = require('../../../assets/animations/page11/wolf.json');

export default function PageEleven({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene11));
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
                source={scene11JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />

            <LottieView
                source={pigs}
                autoPlay={true}
                loop={true}
                style={styles.view_pigs}
            />

            <LottieView
                source={wolf}
                ref={animation_wolf}
                loop={true}
                style={styles.view_wolf}
            />

            <LayoutPages>

                {/* controle de animação 1 */}
                <TouchableNativeFeedback onPress={start_animation_wolf}>
                    <Animatable.View style={[styles.toggleView, styles.togglewolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableNativeFeedback>

                <LegendCaptionArea text={textScene11} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageTwelve" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}