import React , { useContext, useEffect , useState} from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene8 } from '../legendTextFile';

const scene8JSON = require('../../../assets/animations/page8/page_8.json');
const narrationScene8 = require('../../../assets/sound/narration/Page08/Page8.mp3');

export default function PageEight({navigation}) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene8));
    }, []);

    useEffect(() => {
        let timer = setTimeout(() => {
            setloadingButton(true);
        }, 3500);
        return () => {
            clearTimeout(timer);
        };
    }, []);



    return (
        <View style={styles.container}>
            <LottieView
                source={scene8JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene8} />
                
                {loadingButtonNavigation &&  <ButtonNavigation  proxRoute="PageNine" navigation={navigation} showComponent={true}/>}

            </LayoutPages>
        </View >
    )
}