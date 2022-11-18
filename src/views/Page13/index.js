import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene13 } from '../legendTextFile';

const narrationScene13 = require('../../../assets/sound/narration/Page13/Page13.mp3');
const scene13JSON = require('../../../assets/animations/page13/page13.json');

export default function PageThirteen({ navigation }) {

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
        navigation.addListener('focus', () => initNarrationSound(narrationScene13));
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
                source={scene13JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LayoutPages>
                <LegendCaptionArea text={textScene13} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageFourteen" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}