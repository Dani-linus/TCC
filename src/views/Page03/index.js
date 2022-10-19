//página 3 do livro
import React, { useRef, useState } from 'react';
import { View, Image, PanResponder, Animated, Text, Alert, Easing, } from 'react-native';
import styles from '../../views/Page03/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';
import ButtonNavigation from '../../components/ButtonNavigation';

export default function PageThree({navigation}) {

    const pan = useRef(new Animated.ValueXY(0, 0)).current;
    const [locationX, setLocationX] = useState(0);
    const [locationY, setLocationY] = useState(0);

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
                source={require('../../../assets/animations/page3/page_3.json')}
                autoPlay={true}
                loop={true}
                style={styles.view_animation_cover}>
            </LottieView>

            <LayoutPages>

            <Animated.View style={{
                transform: [{ translateX: pan.x }, { translateY: pan.y }],
            }}
            {...panResponder.panHandlers}
            >
                <Image
                    style={styles.img_door}
                    source={require('./../../../assets/img/strawHouse/door/door.png')}
                    />
                <Text>

                    X: {locationX}, Y: {locationY}
                </Text>
            </Animated.View>
                <ButtonNavigation proxRoute="PageFour" navigation={navigation}/>
            </LayoutPages>
        </View>
    )
}

