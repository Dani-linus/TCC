import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';

import { scene5JSON } from '../constsImportFiles'
import LayoutPages from '../../components/LayoutPages';

export default function PageFive({navigation}) {
    return (
        <View style={styles.container}>
            <LottieView
                source={scene5JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={'...'} />
                
                <ButtonNavigation  proxRoute="PageSix" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}