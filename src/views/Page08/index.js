import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { scene8JSON } from '../constsImportFiles';
import { textScene8 } from '../legendTextFile';

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
                
                <ButtonNavigation  proxRoute="PageNine" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}