import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, Touchable, Animated, PanResponder, TouchableWithoutFeedback, Image } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Audio } from 'expo-av';
//import * as Animatable from "react-native-animatable";
import LegendCaptionArea from '../src/assets/components/LegendCaptionArea';

export default class Cena1 extends React.Component {
    constructor(props) {
        super(props);
        this.startAnimation();
    }

    state = {
        animation: new Animated.Value(0)
    }

    startAnimation = () => {
        Animated.timing(this.state.animation, {
            toValue: 1,
            duration: 7000,
            useNativeDriver: true,
        }).start();
    }
  
    //PLAY NO SOM
    playSound() {
        this.sound.playAsync();
    }

    render() {

        const animatedStyles = {
            opacity: this.state.animation
        }
        return (
            <View style={styles.container}>
                <ImageBackground
                    source={require('../assets/scenes/CENA1.jpg')}
                    style={{ width: 854, height: 500 }}>
                        <LegendCaptionArea text = 'testando 1.2.3'>
                        </LegendCaptionArea>
                </ImageBackground>
            </View >
        )
    }
}