//página 4 do livro
import React, { useContext, useEffect, useState } from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import LegendCaptionArea from 'components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene4 } from 'views/legendTextFile';

const scene4JSON = require('../../../assets/animations/page4/page_4.json');
const presentationPig = require('../../../assets/animations/page4/presentation_pig_kako.json')
const narrationScene4 = require('../../../assets/sound/narration/Page04/Page4.mp3');

export default function PageFour({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);

    function timeoutButtonNavegacao() {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }
    //Iniciando a narração
    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene4));
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
                source={scene4JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                style={styles.view_animation_cover}
            ></LottieView>

            <LottieView
                source={presentationPig}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                style={styles.presentation}
            ></LottieView>


            <LayoutPages>
                {/* interatividade da casa de madeira */}

                <LegendCaptionArea text={textScene4} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageFive" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View>
    )
}