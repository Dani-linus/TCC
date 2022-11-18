//página 4 do livro
import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import LegendCaptionArea from 'components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import * as Animatable from 'react-native-animatable';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene4 } from 'views/legendTextFile';

const scene4JSON = require('../../../assets/animations/page4/page4.json');
const presentationPig = require('../../../assets/animations/page4/presentationPig2.json')
const narrationScene4 = require('../../../assets/sound/narration/Page04/Page4.mp3');
const woodHouseJSON = require('../../../assets/animations/page4/WoodHouse.json');

export default function PageFour({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);

    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);
    const [img, setImg] = useState(false);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
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
            setImg(false); //Resetando a imagem
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
                loop={false}
                resizeMode='cover'
                style={styles.presentation}
            ></LottieView>

            <LayoutPages>
                <InteractionButton show={loadingButtonNavigation} action={() => setImg(true)} />
                <BuildWoodHouse showComponent={img}/>
                <LegendCaptionArea text={textScene4} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageFive" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View>
    )
}

function BuildWoodHouse(props) {
    const buildHouse = props.showComponent ? (
        <LottieView source={woodHouseJSON} style={styles.woodHouse} />
    ): null;
    return buildHouse;
}

function InteractionButton(props){
    const button = props.show ? (
        <TouchableWithoutFeedback onPress={props.action}>
            <Animatable.View style={[styles.toggleView, styles.toggleHouse]} animation="pulse" easing="linear" iterationCount="infinite" />
        </TouchableWithoutFeedback>
    ) : null;
    return button;
}