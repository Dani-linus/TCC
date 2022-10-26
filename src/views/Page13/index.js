import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { textScene13 } from '../legendTextFile';

export default function PageThirteen({navigation}) {
    return (
        <View style={styles.container}>
            {/* <LottieView
                source={scene13JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                /> */}

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene13} />
                
                <ButtonNavigation  proxRoute="PageFourteen" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}