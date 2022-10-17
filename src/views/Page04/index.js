//página 4 do livro
import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../views/Page04/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';

export default function PageFour() {

    return (
        <View style={styles.container}>

            <LottieView
                source={require('../../../assets/animations/page4/page_4.json')}
                autoPlay={true}
                loop={true}
                style={styles.view_animation_cover}>
            </LottieView>
            <LayoutPages>

                <LegendCaptionArea text={'texto'} />
            </LayoutPages>
        </View>
    )
}