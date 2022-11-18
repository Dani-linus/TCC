import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene11 } from '../legendTextFile';
import * as Animatable from 'react-native-animatable';

const scene11JSON = require('../../../assets/animations/page11/page11.json');
const narrationScene11 = require('../../../assets/sound/narration/Page11/Page11.mp3');
const pigs = require('../../../assets/animations/page11/pigsSpeakingFinal.json');
const wolf = require('../../../assets/animations/page11/wolfDoor.json');

export default function PageEleven({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const animation_wolf = useRef();
    const animation_pigs = useRef();
    const [isInteraction, setInteraction] = useState(false);

    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
            setInteraction(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene11));
        animation_pigs.current?.reset();
        animation_wolf.current?.reset();
    }, []);

    //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);


    // animation_wolf.current?.play(210, 299);
    
    function start_animation_wolf() {
        animation_wolf.current?.play(0, 299);
        setInteraction(false);
        setTimeout(() => {
            animation_pigs.current?.play();
            animation_wolf.current?.play(210, 299);
        }, 7000);
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
                loop={false}
                style={styles.view_pigs}
                ref={animation_pigs}
            />

            <LottieView
                source={wolf}
                ref={animation_wolf}
                loop={true}
                style={styles.view_wolf}
            />

            <LayoutPages>
                <InteractionButton show={isInteraction} action={start_animation_wolf}/>
                <LegendCaptionArea text={textScene11} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageTwelve" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}

function InteractionButton(props){
    const button = props.show ? (
        <TouchableWithoutFeedback onPress={props.action}>
            <Animatable.View style={[styles.toggleView, styles.togglewolf]} animation="pulse" easing="linear" iterationCount="infinite" />
        </TouchableWithoutFeedback>
    ) : null;
    return button;
}