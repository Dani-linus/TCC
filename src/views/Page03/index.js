//página 3 do livro
import React, { useRef, useState , useContext, useEffect } from 'react';
import { View, Image, PanResponder, Animated, Text, Alert, Easing, useWindowDimensions } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene3 } from 'views/legendTextFile';

const presentationPigJSON =  require('../../../assets/animations/page3/presentation_pig_tuca.json');
const scene3JSON = require('../../../assets/animations/page3/page_3.json');
const imgDoor =  require('../../../assets/img/strawHouse/door/door.png');
const narrationScene3 =  require('../../../assets/sound/narration/Page03/Page3.mp4');


export default function PageThree({navigation}) {

    const { height, width } = useWindowDimensions(); // Vai usar?

    const pan = useRef(new Animated.ValueXY(0, 0)).current;
    const [locationX, setLocationX] = useState(0);
    const [locationY, setLocationY] = useState(0);
    
    const { initNarrationSound } = useContext(SoundNarrationContext);
    
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
                    style={{ position: 'absolute', left: -220, bottom: -50}}
                ></LottieView>
            <LayoutPages>

                <Animated.View style={{
                    transform: [{ translateX: pan.x }, { translateY: pan.y }],
                }}
                {...panResponder.panHandlers}
                >
                    <Image
                        style={styles.img_door}
                        source={imgDoor}
                        />
                    <Text>

                        X: {locationX}, Y: {locationY}
                    </Text>
                </Animated.View>

                <LegendCaptionArea text={textScene3}/>
                
                <ButtonNavigation proxRoute="PageFour" navigation={navigation}/>

            </LayoutPages>
        </View>
    )
}

