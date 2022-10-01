import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer,useNavigation} from '@react-navigation/native'
import LottieView from 'lottie-react-native';
import styles from './Estilo';

export default class Splash extends React.Component{
     
    render(){
        return(
            <View style={styles.splash}>
                <LottieView
                source={require('../src/assets/animation/splash-abelha.json')}
                autoPlay
                loop={false}
                onAnimationFinish={()=> this.props.navigation.navigate('Menu')}
                />
            </View>
        )
}
}
