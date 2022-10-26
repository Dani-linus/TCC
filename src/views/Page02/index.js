//Página 2 do livro
import React ,{useContext, useEffect} from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import LegendCaptionArea from '@app/components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '@app/components/LayoutPages';
import ButtonNavigation from '@app/components/ButtonNavigation'
import { SoundNarrationContext } from "@app/contextAPI/soundNarration";

const pigMomPigFatherJSON = require('@app/../assets/animations/page2/pig_father_pig_mom.json');
const scene2JSON = require('@app/../assets/animations/page2/page_2.json');
const narrationScene2 =  require('@app/../assets/sound/narration/Page02/Page2.mp4');


export default function PageTwo({navigation}) {
    let animation_pig_father_pig_mom = React.createRef();
    const {initNarrationSound,stopSound} = useContext(SoundNarrationContext);

    useEffect(() => {
        navigation.addListener('focus', ()=> initNarrationSound(narrationScene2));
       }
       );

    function startAnimationPigFatherPigMom() {
        animation_pig_father_pig_mom.current?.play();
    }
    return (
        <View style={styles.container}>

                <LottieView
                    source={scene2JSON}
                    autoPlay={true}
                    loop={true}
                    resizeMode='cover'
                ></LottieView>

            <LayoutPages>

                <View style={styles.view_pig_father_pig_mom}>
                    <TouchableNativeFeedback onPress={startAnimationPigFatherPigMom}>
                        <LottieView
                            source={pigMomPigFatherJSON}
                            ref={animation_pig_father_pig_mom}
                            ></LottieView>
                    </TouchableNativeFeedback>
                </View>

                <LegendCaptionArea text={'Então chegou o dia em que saíram da casa de seus pais para morar sozinhos. Os três porquinhos partiram para o bosque em busca de um bom lugar para construir, cada um, a sua casa.'} />
                
                <ButtonNavigation proxRoute="PageThree" navigation={navigation}/>                                    
            </LayoutPages>
        </View >
    )
}

