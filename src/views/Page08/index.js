import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { textScene8 } from '../legendTextFile';

const scene8JSON = require('../../../assets/animations/page8/page_8.json');

export default function PageEight({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene8JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene8} />
                
                <ButtonNavigation  proxRoute="PageNine" navigation={navigation} showComponent={true}/>

            </LayoutPages>
        </View >
    )
}