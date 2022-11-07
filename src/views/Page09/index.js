import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { textScene9 } from '../legendTextFile';

const scene9JSON = require('../../../assets/animations/page9/page_9.json');

export default function PageNine({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene9JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene9} />
                
                <ButtonNavigation  proxRoute="PageTen" navigation={navigation} showComponent={true}/>

            </LayoutPages>
        </View >
    )
}