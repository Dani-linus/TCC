import React, { useContext, useEffect, useState, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene14 } from '../legendTextFile';
import * as Animatable from "react-native-animatable";

const narrationScene14 = require('../../../assets/sound/narration/Page14/Page14.mp3');
const scene14JSON = require('../../../assets/animations/page14/page_14.json');
const cauldronJSON = require('../../../assets/animations/page14/cauldron.json');

export default function PageFourteen({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [click, setClick] = useState(false);
    const [load, setLoad] = useState(true);
    const animation_cauldron = useRef();

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene14));
        updateVolumSound();
    }, []);

    //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    animation_cauldron.current?.play(0, 140);

    function startCauldron() {
        animation_cauldron.current?.play(140, 300);
        setTimeout(() => {
            setClick(true);
            animation_cauldron.current?.play(162, 190);
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
                loop={true}
                style={styles.view_caldeirao}
            />

            <LayoutPages>
                <TouchableOpacity onPress={startCauldron}>
                    <Animatable.View style={[styles.toggleView, styles.toggleCauldron]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableOpacity>
                
                <Shout showComponent={click}/>

                <LegendCaptionArea text={textScene14} />
                <ButtonNavigation proxRoute="PageFifteen" navigation={navigation} showComponent={true} />
            </LayoutPages>
        </View >
    )
}

function Shout(props) {
    const shout = props.showComponent ? (
        <View style={styles.shout}>
            <View style={{flex: 2, position:'absolute', left: 150, top: 50}}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={1000}
                    duration={1000}
                    style={styles.txt1}>
                        Aii
                </Animatable.Text>
            </View>

            <View style={{flex: 2, position:'absolute', left: 120, top: 20}}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={2000}
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
