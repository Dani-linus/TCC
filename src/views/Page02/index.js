//Página 2 do livro
import React ,{useContext, useEffect} from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from 'components/LegendTextArea';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation'
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene2 } from 'views/legendTextFile';

const pigMomPigFatherJSON = require('../../../assets/animations/page2/pig_father_pig_mom.json');
const scene2JSON = require('../../../assets/animations/page2/page_2.json');
const narrationScene2 =  require('../../../assets/sound/narration/Page02/Page2.mp3');


export default function PageTwo({navigation}) {
    let animation_pig_father_pig_mom = React.createRef();
    const {initNarrationSound} = useContext(SoundNarrationContext);
    
   useEffect(() => {
        navigation.addListener('focus', ()=> initNarrationSound(narrationScene2));
    }, []);
    
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

                <LegendCaptionArea text={textScene2} />
                
                <ButtonNavigation proxRoute="PageThree" navigation={navigation}  showComponent={true}/>                                    
            </LayoutPages>
        </View >
    )
}

