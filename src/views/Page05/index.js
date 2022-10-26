import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LayoutPages from '@app/components/LayoutPages';
import LegendCaptionArea from '@app/components/LegendTextArea';
import ButtonNavigation from '@app/components/ButtonNavigation';

const scene5JSON =  require('@app/../assets/animations/page5/page_5.json');


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