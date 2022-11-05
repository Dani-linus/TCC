import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import LegendCaptionArea from 'components/LegendTextArea';
import ButtonNavigation from 'components/ButtonNavigation';

import { textScene6 } from '../legendTextFile';

// JSON com problemas
const scene6JSON = require('../../../assets/animations/page6/page_6.json')

export default function PageSix({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene6JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene6} />
                
                <ButtonNavigation  proxRoute="PageSeven" navigation={navigation} showComponent={true}/>

            </LayoutPages>
        </View >
    )
}