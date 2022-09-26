import React, { useRef } from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';
import * as Animatable from "react-native-animatable";
import { ViewPropTypes } from 'deprecated-react-native-prop-types';

export default function Cena2() {

    const lottieRef = useRef(null)

    return (
        <View style={styles.fundocena_json}>
            <LottieView
                source={require('../animation/CENA _1.json')}
                autoPlay={true}
                loop={true}>
            </LottieView>

            <TouchableWithoutFeedback onPress={() => {
                lottieRef.current.play()
            }}>
            <View>
                <LottieView style={styles.animationPig}
                    source={require('../animation/pig.json')}
                    ref={lottieRef}
                  >
                </LottieView>
            </View>
            </TouchableWithoutFeedback>
        </View>
    )

}
