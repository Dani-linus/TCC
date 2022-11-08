import React, { useContext, useEffect , useState} from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene14 } from '../legendTextFile';

//Sem a narração ainda
//const narrationScene14 = require('../../../assets/sound/narration/Page14/Page14.mp3');

export default function PageFourteen({navigation}) {

    /*
    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene14));
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 3500);
        return () => {
            clearTimeout(timer);
        };
    }, []);

    */


    // frames do caldeirão
    /*
    1- não fica em loop
    2 - inicia em 0-150
    3 - interação pra acender o fogo e o lobo descer - 150-300
    4 -  volta em loop no fogo 150-200
    */

    return (
        <View style={styles.container}>
            {/* <LottieView
                source={scene14JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                /> */}

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene14} />
                
               <ButtonNavigation  proxRoute="PageFifteen" navigation={navigation}showComponent={true}/>

            </LayoutPages>
        </View >
    )
}