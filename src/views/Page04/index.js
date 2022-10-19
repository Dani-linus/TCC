//página 4 do livro
import React from 'react';
import { View, Image } from 'react-native';
import styles from '../../views/Page04/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';
import ButtonNavigation from '../../components/ButtonNavigation';

export default function PageFour({navigation}) {

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
                <ButtonNavigation  proxRoute="PageFive" navigation={navigation}/>
            </LayoutPages>
        </View>
    )
}