import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { scene14JSON } from '../constsImportFiles';
import { textScene14 } from '../legendTextFile';

export default function PageFourteen({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene14JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene14} />
                
                <ButtonNavigation  proxRoute="PageFifteen" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}