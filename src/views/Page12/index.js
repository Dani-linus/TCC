import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './style';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene12 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const wolfPage12 = require('../../../assets/animations/page12/wolf_page_12.json');
const narrationScene12 = require('../../../assets/sound/narration/Page12/Page12.mp3');
const scene12JSON = require('../../../assets/animations/page12/page_12.json')

export default function PageTwelve({ navigation }) {

    const animation_wolf = React.createRef();
    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene12));
        updateVolumSound();
    }, []);

    //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    function wolfMotionControl() {
        // lobo sobra tres vezes a casa até cansar
        for (var i = 0; i < 3; i++) {
            animation_wolf.current?.play(0, 300);
        }
        //   animation_wolf.current?.play();

    }
    return (
        <View style={styles.container}>
            <LottieView
                source={scene12JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LottieView
                source={wolfPage12}
                ref={animation_wolf}
                style={styles.view_wolf}
            />
            <LayoutPages>
                {/* controle de animação 1 */}
                <TouchableNativeFeedback onPress={wolfMotionControl}>
                    <Animatable.View style={[styles.toggleView, styles.togglewolf]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableNativeFeedback>

                <LegendCaptionArea text={textScene12} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageThirteen" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}