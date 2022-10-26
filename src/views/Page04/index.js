//página 4 do livro
import React ,{useContext, useEffect} from 'react';
import { View, Image } from 'react-native';
import styles from '../../views/Page04/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';
import ButtonNavigation from '../../components/ButtonNavigation';
import { SoundNarrationContext } from "../../contextAPI/soundNarration";

import { scene4JSON, narrationScene4 } from '../constsImportFiles';

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