import React , { useContext, useEffect , useState} from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import styles from './style';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene9 } from '../legendTextFile';

const scene9JSON = require('../../../assets/animations/page9/page_9.json');

//o audio vai ser regravado pois tem um erro na fala.
const narrationScene9 = require('../../../assets/sound/narration/Page09/Page9.mp3');

export default function PageNine({navigation}) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene9));
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
                source={scene9JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />
            <LayoutPages>
                {/* ... */}
                <LegendCaptionArea text={textScene9} />
                {loadingButtonNavigation &&  <ButtonNavigation  proxRoute="PageTen" navigation={navigation} showComponent={true}/>}
            </LayoutPages>
        </View >
    )
}