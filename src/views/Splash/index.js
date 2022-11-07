import React, { useEffect } from 'react';
import { Dimensions, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useFonts } from 'expo-font';
import { SoundContext } from 'contextAPI/sound';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

const size =  Dimensions.get('window').width * 0.5;

const splashJSON = require('../../../assets/animations/splash/splash_sapo.json')
export default function SplashScreen() {

    const navigation = useNavigation();
    const { initSound } = useContext(SoundContext);

    useEffect(()=>{
        const [fontsLoaded] = useFonts({
            'PatrickHand': require('./assets/font/PatrickHand-Regular.ttf'),
            'FuzzyBubbles-Bold': require('./assets/font/FuzzyBubbles-Bold.ttf'),
        });
        initSound();
        
        if (!fontsLoaded) {
            return null;
        }else{
            navigation.reset({
                index: 0,
                routes: [{ name: 'HomeView' }]
            });
        }

    }, []);

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