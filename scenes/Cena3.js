import React from 'react';
import { Text, View, TouchableWithoutFeedback } from 'react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';
import * as Animatable from "react-native-animatable";

export default class Cena3 extends React.Component {

    render() {
        return (

            <View>
                <LottieView style={[styles.view_por]}
                    source={require('../animation/porco-comemorando.json')}
                    autoPlay={true}
                    loop={true}>
                </LottieView>
            </View>
        )
    }
}
