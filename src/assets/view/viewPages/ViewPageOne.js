//Página 1 do livro
import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, Touchable, Animated, Image } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../../styles/StyleViewPageOne';
import LegendCaptionArea from '../../components/LegendCaptionArea';
import LottieView from 'lottie-react-native';

export default function ViewPageOne() {
    return (
        <View style={styles.container}>
            <LottieView
                source={require('../../animation/CENA_1.json')}
                autoPlay={true}
                loop={true}>
            </LottieView>
            <LegendCaptionArea text={'Era uma vez três porquinhos que viviam com seus pais nos campos encantados' + "\n" +
                'Os porquinhos estavam muito felizes, e conforme cresciam, se tornaram cada vez mais independentes '}>
            </LegendCaptionArea>
        </View >
    )
}