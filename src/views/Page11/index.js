import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { textScene11 } from '../legendTextFile';
const scene11JSON = require('../../../assets/animations/page11/page_11.json');

export default function PageEleven({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene11JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene11} />
                
                <ButtonNavigation  proxRoute="PageTwelve" navigation={navigation}showComponent={true}/>

            </LayoutPages>
        </View >
    )
}