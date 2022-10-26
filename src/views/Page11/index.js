import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { scene11JSON } from '../constsImportFiles';
import { textScene11 } from '../legendTextFile';

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
                
                <ButtonNavigation  proxRoute="PageTwelve" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}