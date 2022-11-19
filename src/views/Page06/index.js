import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import LegendCaptionArea from 'components/LegendTextArea';
import * as Animatable from 'react-native-animatable';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene6 } from '../legendTextFile';

const scene6JSON = require('../../../assets/animations/page6/page6.json')
const badWolfJSON = require('../../../assets/animations/page6/badWolf.json')
const narrationScene6 = require('../../../assets/sound/narration/Page06/Page6.mp3');

export default function PageSix({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const animation_badWolf = useRef();
    const [load, setLoad] = useState(true);
    const [isInteraction, setInteraction] = useState(false);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
            setInteraction(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene6));
        animation_badWolf.current?.reset();
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    // animation_badWolf.current?.play(0, 29);

    function startAnimationWolf() {
        animation_badWolf.current?.play(29, 99);
        setInteraction(false);
        // setTimeout(() => {
        //     animation_badWolf.current?.play(40, 99);
        // }, 7000);
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
                loop={false}
                resizeMode='cover'
                style={styles.badWolfStyle}
            />

            <LayoutPages>
                <InteractionButton show={isInteraction} action={startAnimationWolf} />
                <LegendCaptionArea text={textScene6} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageSeven" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}

function InteractionButton(props){
    const button = props.show ? (
        <TouchableWithoutFeedback onPress={props.action}>
            <Animatable.View style={[styles.toggleView, styles.togglebadWolf]} animation="pulse" easing="linear" iterationCount="infinite" />
        </TouchableWithoutFeedback>
    ) : null;
    return button;
}