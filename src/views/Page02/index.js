import React, { useContext, useEffect, useRef, useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import LayoutPages from 'components/LayoutPages';
import * as Animatable from 'react-native-animatable';
import styles from './style';
import ButtonNavigation from 'components/ButtonNavigation'
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene2 } from 'views/legendTextFile';

const pigMomPigFatherJSON = require('../../../assets/animations/page2/pigParents.json');
// const pigMomPigFatherJSON = require('../../../assets/animations/page2/pigMomAndPigFather.json');
const scene2JSON = require('../../../assets/animations/page2/page2.json');
// const scene2JSON = require('../../../assets/animations/page2/page2.json');
const narrationScene2 = require('../../../assets/sound/narration/Page02/Page2.mp3');

export default function PageTwo({ navigation }) {
    const animation_pig_father_pig_mom = useRef();
    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);
    const [isInteraction, setInteraction] = useState(false);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
            setInteraction(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene2));
        animation_pig_father_pig_mom.current?.reset();
    }, []);

       //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    // animation_pig_father_pig_mom.current?.play(0, 140);

    function startAnimationPigFatherPigMom() {
        animation_pig_father_pig_mom.current?.play();
        setInteraction(false);
        // setTimeout(() => {
        //     animation_pig_father_pig_mom.current?.play(0, 140);
        // }, 5000);
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
                <InteractionButton show={isInteraction} action={startAnimationPigFatherPigMom} />
                <LegendCaptionArea text={textScene2} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageThree" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}

function InteractionButton(props){
    const button = props.show ? (
        <TouchableWithoutFeedback onPress={props.action}>
            <Animatable.View style={[styles.toggleView, styles.togglePigs]} animation="pulse" easing="linear" iterationCount="infinite" />
        </TouchableWithoutFeedback>
    ) : null;
    return button;
}
