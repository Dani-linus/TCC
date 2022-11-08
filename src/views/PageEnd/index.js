import React, { useContext, useEffect, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import * as Animatable from "react-native-animatable";
import { useNavigation } from '@react-navigation/native';
const end = require('../../../assets/animations/end/fireworks.json');

export default function PageEnd() {

    const navigation = useNavigation();

    const goBack = () => {
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <LottieView
                source={end}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <View style={styles.view_txt}>
                <Animatable.Text
                    animation="zoomIn"
                    easing={'ease-in-out'}
                    delay={2000}
                    duration={1000}
                    style={styles.txt1}>Parabéns você finalizou a leitura da história !</Animatable.Text>
            </View>
            <Animatable.View
                animation="zoomIn"
                easing={'ease-in-out'}
                delay={4000}
                duration={1000} >
                <TouchableOpacity style={[styles.btn, styles.btn_restart]} onPress={goBack}>
                    <Text style={[styles.text_black, styles.text_modal_options]}>Recomeçar a leitura</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}