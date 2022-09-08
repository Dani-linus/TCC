import React, { useState, useRef, useEffect} from 'react';
import { Text, View, ImageBackground, Touchable } from 'react-native';
import { NavigationContainer, useNavigation, } from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Cena1 extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <View>
                <ImageBackground
                    source={require('../assets/img/cena1.png')}
                    style={{ width: 1000, height: 500 }}
                />
                <TouchableOpacity>
                
                    <LottieView
                        source={require('../animation/abelha_teste.json')}
                        autoPlay={false}
                        loop={false}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}