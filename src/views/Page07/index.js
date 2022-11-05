import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import ButtonNavigation from 'components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { textScene7 } from '../legendTextFile';

const scene7JSON = require('../../../assets/animations/page7/page_7.json');

export default function PageSeven({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene7JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene7} />
                
                <ButtonNavigation  proxRoute="PageEight" navigation={navigation} showComponent={true}/>

            </LayoutPages>
        </View >
    )
}