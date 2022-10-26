//página 4 do livro
import React ,{useContext, useEffect} from 'react';
import { View, Image } from 'react-native';
import styles from './style';
import LegendCaptionArea from '@app/components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '@app/components/LayoutPages';
import ButtonNavigation from '@app/components/ButtonNavigation';
import { SoundNarrationContext } from "@app/contextAPI/soundNarration";

const scene4JSON = require('@app/../assets/animations/page4/page_4.json');
const narrationScene4 =  require('@app/../assets/sound/narration/Page04/Page4.mp4');

export default function PageFour({navigation}) {

    const {initNarrationSound, playSound} = useContext(SoundNarrationContext);
    //useEffect(() => {
      //  navigation.addListener('focus', ()=> initNarrationSound(narrationScene4));
       //}
       //);

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

                <LegendCaptionArea text={'...'} />
                
                <ButtonNavigation  proxRoute="PageFive" navigation={navigation}/>

            </LayoutPages>
        </View>
    )
}