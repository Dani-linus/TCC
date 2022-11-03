//página 3 do livro
import React, { useRef, useState , useContext, useEffect } from 'react';
import { View, Image, PanResponder, Animated, Text} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene3 } from 'views/legendTextFile';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const presentationPigJSON =  require('../../../assets/animations/page3/presentation_pig_tuca.json');
const scene3JSON = require('../../../assets/animations/page3/page_3.json');
const narrationScene3 =  require('../../../assets/sound/narration/Page03/Page3.mp3');
const imgCasaTeste = require('../../../assets/img/straw-house.png');


export default function PageThree({navigation}) {
    
    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [viewImage, setViewImage] =  useState(false);
    
    useEffect(() => {
        navigation.addListener('focus', ()=> initNarrationSound(narrationScene3));
    });

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                pan.setOffset({
                    x: pan.x._value,
                    y: pan.y._value,
                });
            },
            onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (event, gestureState) => {
                setLocationX(event.nativeEvent.locationX.toFixed(2));
                setLocationY(event.nativeEvent.locationY.toFixed(2));
                pan.flattenOffset();
                //  setLocationX(event.nativeEvent.locationX.toFixed(2));
                //  setLocationY(event.nativeEvent.locationY.toFixed(2));
            },
        })
    ).current;

    function moveImageXY() {
        pan.setValue({ x: 0 , y: 0});

        Animated.timing(pan, {
            toValue: 150,
            duration: 2000,
            useNativeDriver: false,
        }).start();
    };

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
                    autoPlay
                    loop={false}
                    style={{ position: 'absolute', left: -220, bottom: -70}}
                ></LottieView>
            <LayoutPages>

                <Pressable onPress={() => setViewImage(true)} style={{width: 60, height: 60, borderRadius: 50, backgroundColor: 'white', left: 600, top: 110}}>
                </Pressable>
                <BuildStrawHouse />

                <LegendCaptionArea text={textScene3}/>
                
                <ButtonNavigation proxRoute="PageFour" navigation={navigation}/>

            </LayoutPages>
        </View>
    )
}

// função para renderizar a imagem da casa.
function BuildStrawHouse(){
    return(
        <View>
            <Image source={imgCasaTeste} style={{width: 150, height: 150,}}/>
        </View>
    )
}
