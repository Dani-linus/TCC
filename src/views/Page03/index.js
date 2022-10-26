//página 3 do livro
import React, { useRef, useState , useContext, useEffect } from 'react';
import { View, Image, PanResponder, Animated, Text, Alert, Easing, useWindowDimensions } from 'react-native';
import styles from '../../views/Page03/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';
import ButtonNavigation from '../../components/ButtonNavigation';
import { SoundNarrationContext } from "../../contextAPI/soundNarration";

import { narrationScene3, presentationPigJSON, scene3JSON, imgDoor } from '../constsImportFiles';

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

            <LayoutPages>
                <LottieView 
                    source={presentationPigJSON}
                    autoPlay
                    loop={false}
                    style={{ position: 'absolute', left: -220, bottom: -50}}
                ></LottieView>

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

                <LegendCaptionArea text={'O primeiro porquinho se chamava Tuca, era o mais preguiçoso dos três, gostava muito de brincar e contar piadas, mas nem um pouco de trabalhar. Então pegou a palha que viu pela sua frente e em pouco tempo construiu sua casinha, mesmo seus irmãos dizendo que não era segura.'} />
                
                <ButtonNavigation proxRoute="PageFour" navigation={navigation}/>

            </LayoutPages>
        </View>
    )
}

