import React, { useEffect, useContext } from 'react';
import { Dimensions, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import { SoundContext } from 'contextAPI/sound';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const size =  Dimensions.get('window').width * 0.5;

const splashJSON = require('../../../assets/animations/splash/splash_sapo.json')
const patrickHand = require('../../../assets/font/PatrickHand-Regular.ttf')
const fuzzyBubbles = require('../../../assets/font/FuzzyBubbles-Bold.ttf')

export default function SplashScreen() {

    const navigation = useNavigation();
    const { initSound } = useContext(SoundContext);

    const [fontsLoaded] = useFonts({
        'PatrickHand': patrickHand,
        'FuzzyBubbles-Bold': fuzzyBubbles,
    });
    
    
    useEffect(()=>{
        setTimeout(() => {
           initSound();
            if (fontsLoaded) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'HomeView' }]
                });
            }
        }, 3000);

    }, [fontsLoaded]);

    return (
        <View style={styles.container}>
            <LottieView
                source={splashJSON}
                autoPlay={true}
                loop={true}
                resizeMode='contain'
                style={{width: size, height: size}}
            />
        </View >
    )
}