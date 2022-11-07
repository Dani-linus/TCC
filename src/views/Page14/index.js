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