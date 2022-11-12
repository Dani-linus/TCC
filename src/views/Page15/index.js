import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene15 } from '../legendTextFile';

const scene15JSON = require('../../../assets/animations/page15/page_15.json')
const narrationScene15 = require('../../../assets/sound/narration/Page15/Page15.mp3');

export default function PageFifteen({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene15));
    }, []);

    //Definido um timeout para apresentar o button de navegacao
    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        return () => {
            setloadingButton(false);
        };
    }, [navigation, load]);


    return (
        <View style={styles.container}>
            <LottieView
                source={scene15JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LayoutPages>
                <LegendCaptionArea text={textScene15} />
                <ButtonNavigation proxRoute="PageEnd" navigation={navigation} showComponent={true} />
            </LayoutPages>
        </View >
    )
}