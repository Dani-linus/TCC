import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
// import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { scene15JSON } from '../constsImportFiles';
import { textScene15 } from '../legendTextFile';

export default function PageFifteen({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene15JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene15} />
                
                {/* <ButtonNavigation  proxRoute="PageFifteen" navigation={navigation}/> */}

            </LayoutPages>
        </View >
    )
}