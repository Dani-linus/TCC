import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { scene7JSON } from '../constsImportFiles';
import { textScene7 } from '../legendTextFile';

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
                
                <ButtonNavigation  proxRoute="PageEight" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}