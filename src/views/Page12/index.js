import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { scene12JSON } from '../constsImportFiles';
import { textScene12 } from '../legendTextFile';

export default function PageTwelve({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene12JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene12} />
                
                <ButtonNavigation  proxRoute="PageThirteen" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}