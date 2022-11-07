import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { textScene10 } from '../legendTextFile';

const scene10JSON = require('../../../assets/animations/page10/page_10.json');

export default function PageTen({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene10JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene10} />
                
                <ButtonNavigation  proxRoute="PageEleven" navigation={navigation} showComponent={true}/>

            </LayoutPages>
        </View >
    )
}