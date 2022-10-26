import React from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import LegendCaptionArea from 'components/LegendTextArea';
import ButtonNavigation from 'components/ButtonNavigation';
import { textScene5 } from 'views/legendTextFile';

// JSON com problema
const scene5JSON =  require('../../../assets/animations/page5/page_5.json');

export default function PageFive({navigation}) {
    return (
        <View style={styles.container}>
            {/* <LottieView
                source={scene5JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                /> */}

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene5} />
                
                <ButtonNavigation  proxRoute="PageSix" navigation={navigation}/>

            </LayoutPages>
        </View >
    )
}