import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer,useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from '../view/Estilo';

export default class Cena2 extends React.Component{
     
    render(){
        return(
            <View style={styles.splash}>
                <LottieView
                source={require('../animation/splash-abelha.json')}
                autoPlay
                loop={false}
                />
            </View>
        )
}
}
