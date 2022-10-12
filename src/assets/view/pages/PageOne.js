//Página 1 do livro
import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, TouchableNativeFeedback, Animated, Image } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../styles/StyleViewPageOne';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';

export default function ViewPageOne() {
    let animation = React.createRef()

    //Iniciando Animação
    function startAnimation() {
        animation.current.play();
    }
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../animation/scene1/cena_1.json')}
                autoPlay={true}
                loop={true}>
            </LottieView>
            <TouchableNativeFeedback onPress={startAnimation}
            touchSoundDisabled={true}
            >
                <LottieView style={styles.touch_one_animation}
                    source={require('../../animation/scene1/mamae-porca-regando-as-flores.json')}
                    ref={animation}
                    duration={1000}
                >
                </LottieView>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={startAnimation}>
                <LottieView style={styles.touch_two_animation}
                    source={require('../../animation/scene1/porco-2-dormindo-cena-1.json')}
                    ref={animation}
                >
                </LottieView>
            </TouchableNativeFeedback>
            <LegendCaptionArea text={'Era uma vez três porquinhos que viviam com seus pais nos campos encantados.' + "\n" +
                'Os porquinhos estavam muito felizes, e conforme cresciam, se tornaram cada vez mais independentes '}>
            </LegendCaptionArea>
        </View >
    )
}