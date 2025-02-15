import React, { useState, useContext, useEffect } from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import * as Animatable from 'react-native-animatable';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene3 } from 'views/legendTextFile';

const presentationPigJSON = require('../../../assets/animations/page3/presentationPig1.json');
const scene3JSON = require('../../../assets/animations/page3/page3.json');
const narrationScene3 =  require('../../../assets/sound/narration/Page03/Page3.mp3');
const strawHouseJSON = require('../../../assets/animations/page3/strawHouse.json');

export default function PageThree({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [file, setFile] = useState(false);
    const [load, setLoad] = useState(true);
    const [loadingButtonNavigation, setloadingButton] = useState(false);
    
    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene3));
        
    }, []);

    useEffect(() => {
        navigation.addListener('focus', () => setLoad(!load), timeoutButtonNavegacao());
        
        return () => {
            setloadingButton(false);
            setFile(false); //Resetando a imagem
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
                <InteractionButton show={loadingButtonNavigation} action={() => setFile(true)} />
                <BuildStrawHouse showComponent={file}/>
                <LegendCaptionArea text={textScene3} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageFour" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View>
    )
}

// função para renderizar a imagem da casa.
function BuildStrawHouse(props) {
    const buildHouse = props.showComponent ? (
        <LottieView source={strawHouseJSON} style={styles.strawHouse} />
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