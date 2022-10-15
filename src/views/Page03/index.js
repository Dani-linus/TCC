//página 3 do livro
import React from 'react';
import { View } from 'react-native';
import styles from '../../views/Page03/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';

export default function PageOne() {
   
    return (
        <View style={styles.container}>
               
                <LottieView
                    source={require('../../../assets/animations/page3/page_3.json')}
                    autoPlay={true}
                    loop={true}
                    style={styles.view_animation_cover}>
                </LottieView>
                
                <LayoutPages>

                <LegendCaptionArea text={'texto'} />
                </LayoutPages>
        </View >
    )
}

