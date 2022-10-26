//página 4 do livro
import React ,{useContext, useEffect} from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import LegendCaptionArea from 'components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene4 } from 'views/legendTextFile';

const scene4JSON = require('../../../assets/animations/page4/page_4.json');
const narrationScene4 =  require('../../../assets/sound/narration/Page04/Page4.mp4');

export default function PageFour({navigation}) {

    const {initNarrationSound, playSound} = useContext(SoundNarrationContext);
    useEffect(() => {
       navigation.addListener('focus', ()=> initNarrationSound(narrationScene4));
       }
    ); // Acho que tem um problema com o arquivo aqui

    return (
        <View style={styles.container}>

            <LottieView
                source={scene4JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                style={styles.view_animation_cover}
                ></LottieView>

            <LayoutPages>

                <LegendCaptionArea text={textScene4} />
                
                <ButtonNavigation  proxRoute="PageFive" navigation={navigation}/>

            </LayoutPages>
        </View>
    )
}