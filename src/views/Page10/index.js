import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { scene10JSON } from '../constsImportFiles';
import { textScene10 } from '../legendTextFile';

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
                
                <ButtonNavigation  proxRoute="PageEleven" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}