import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
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
    const [loadingButtonNavigation, setloadingButton] = useState(true);
    const [click, setClick] = useState(false);
    const [load, setLoad] = useState(true);
    const animation_cauldron = useRef();
    const [isInteraction, setInteraction] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene14));
        animation_cauldron.current?.reset();
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
            setInteraction(true);
        }, 4500);
    }

    // animation_cauldron.current?.play(0, 140);

    function startCauldron() {
        animation_cauldron.current?.play(140, 300);
        setInteraction(false);
        setTimeout(() => {
            setClick(true);
            animation_cauldron.current?.play(165, 190);
        }, 6000);
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
                autoPlay={false}
                loop={true}
                style={styles.view_caldeirao}
            />

            <LayoutPages>
                <InteractionButton show={isInteraction} action={startCauldron}/>
                
                <Shout showComponent={click}/>

                <LegendCaptionArea text={textScene14} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageFifteen" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}

function InteractionButton(props){
        const button = props.show ? (
        <TouchableOpacity onPress={props.action}>
            <Animatable.View style={[styles.toggleView, styles.toggleCauldron]} animation="pulse" easing="linear" iterationCount="infinite" />
        </TouchableOpacity>
    ) : null;
    return button;
}

function Shout(props) {
    const shout = props.showComponent ? (
        <View style={styles.shout}>
            <View style={{flex: 2, position:'absolute', left: 150, top: 50}}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    duration={1000}
                    style={styles.txt1}>
                        Aii
                </Animatable.Text>
            </View>

            <View style={{flex: 2, position:'absolute', left: 120, top: 20}}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={500}
                    duration={1000}
                    style={styles.txt1}>
                        Ai
                </Animatable.Text>
            </View>

            <View style={{flex: 2, position:'absolute', left: 200, top: 80}}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={1500}
                    duration={1000}
                    style={styles.txt1}>
                        Aii Aii
                </Animatable.Text>
            </View>
    </View>
    ): null;

    return shout;
}
