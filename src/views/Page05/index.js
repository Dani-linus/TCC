import React, { useContext, useEffect, useState } from 'react';
import { View, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import LegendCaptionArea from 'components/LegendTextArea';
import ButtonNavigation from 'components/ButtonNavigation';
import * as Animatable from 'react-native-animatable';
import { textScene5 } from 'views/legendTextFile';
import { SoundNarrationContext } from "contextAPI/soundNarration";

const scene5JSON = require('../../../assets/animations/page5/page5.json');
const presentationPigJSON = require('../../../assets/animations/page5/presentationPig3.json')
const narrationScene5 = require('../../../assets/sound/narration/Page05/Page5.mp3')
const brickHouseJSON = require('../../../assets/animations/page5/brickHouse.json');

export default function PageFive({ navigation }) {

    const { initNarrationSound } = useContext(SoundNarrationContext);

    const [loadingButtonNavigation, setloadingButton] = useState(false);
    const [load, setLoad] = useState(true);
    const [img, setImg] = useState(false);

    function timeoutButtonNavegacao() {
        setTimeout(() => {
            setloadingButton(true);
        }, 4500);
    }

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene5));
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
                source={scene5JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LottieView
                source={presentationPigJSON}
                autoPlay={true}
                loop={false}
                style={styles.presentation}
            />

            <LayoutPages>
                <InteractionButton show={loadingButtonNavigation} action={() => setImg(true)} />
                <BuildBrickHouse showComponent={img}/>
                <LegendCaptionArea text={textScene5} />
                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageSix" navigation={navigation} showComponent={true} />}
            </LayoutPages>
        </View >
    )
}

function BuildBrickHouse(props) {
    const buildHouse = props.showComponent ? (
       <LottieView source={brickHouseJSON} style={styles.brickHouse} />
    ): null;
    return buildHouse;
}

function InteractionButton(props){
    const button = props.show ? (
        <TouchableOpacity onPress={props.action}>
            <Animatable.View style={[styles.toggleView, styles.toggleHouse]} animation="pulse" easing="linear" iterationCount="infinite" />
        </TouchableOpacity>
    ) : null;
    return button;
}