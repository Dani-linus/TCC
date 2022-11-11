import React, { useRef, useState, useContext, useEffect } from 'react';
import { View, Image, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import * as Animatable from 'react-native-animatable';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { SoundContext } from 'contextAPI/sound';
import { textScene3 } from 'views/legendTextFile';

const presentationPigJSON = require('../../../assets/animations/page3/presentation_pig_tuca.json');
const scene3JSON = require('../../../assets/animations/page3/page_3.json');
const narrationScene3 =  require('../../../assets/sound/narration/Page03/Page3.mp3');
const strawHouseIMG = require('../../../assets/img/strawHouse.png');

export default function PageThree({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const { updateVolumSound } = useContext(SoundContext);
    const [img, setImg] = useState(false);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene3));
        updateVolumSound();
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);

    return (
        <View style={styles.container}>
            <LottieView
                source={scene3JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            ></LottieView>

            <LottieView
                source={presentationPigJSON}
                autoPlay={true}
                loop={false}
                style={styles.presentation}
            ></LottieView>

            <LayoutPages>

                <TouchableWithoutFeedback onPress={() => setImg(true)}>
                    <Animatable.View style={[styles.toggleView, styles.toggleHouse]} animation="pulse" easing="linear" iterationCount="infinite" />
                </TouchableWithoutFeedback>

                <BuildStrawHouse showComponent={img}/>

                <LegendCaptionArea text={textScene3} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageThree" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View>
    )
}

// função para renderizar a imagem da casa.
function BuildStrawHouse(props) {

    const buildHouse = props.showComponent ? (
        <View>
            <Image source={strawHouseIMG} style={styles.strawHouse} />
        </View>
    ): null;

    return buildHouse;
}
