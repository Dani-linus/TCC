//página 4 do livro
import React ,{useContext, useEffect} from 'react';
import { View, Image } from 'react-native';
import styles from '../../views/Page04/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';
import ButtonNavigation from '../../components/ButtonNavigation';
import { SoundNarrationContext } from "../../contextAPI/soundNarration";

//Narração quarta cena
const soundCena4 =  require('../../../assets/sound/narration/Page04/Page4.mp4');

export default function PageFour({navigation}) {

    const {initNarrationSound, playSound} = useContext(SoundNarrationContext);
    //useEffect(() => {
      //  navigation.addListener('focus', ()=> initNarrationSound(soundCena4));
       //}
       //);

    return (
        <View style={styles.container}>

            <LottieView
                source={require('../../../assets/animations/page4/page_4.json')}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                style={styles.view_animation_cover}
                ></LottieView>
            <LayoutPages>
                <LegendCaptionArea text={'O segundo porquinho se chamava Kako, gostava de muito dormir e não querendo fazer muito esforço, construiu uma casa de madeira, porque achava que era mais prática e resistente.'} />
                <ButtonNavigation  proxRoute="PageFive" navigation={navigation}/>
            </LayoutPages>
        </View>
    )
}