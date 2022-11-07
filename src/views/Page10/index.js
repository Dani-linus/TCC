import React , { useContext, useEffect , useState} from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene10 } from '../legendTextFile';

const scene10JSON = require('../../../assets/animations/page10/page_10.json');
const narrationScene10 = require('../../../assets/sound/narration/Page10/Page10.mp3');

export default function PageTen({navigation}) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene10));
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
                source={scene10JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />

            <LayoutPages>
                {/* ... */}

                <LegendCaptionArea text={textScene10} />
                
                {loadingButtonNavigation &&  <ButtonNavigation  proxRoute="PageEleven" navigation={navigation} showComponent={true}/>}

            </LayoutPages>
        </View >
    )
}