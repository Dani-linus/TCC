import React , { useContext, useEffect , useState} from 'react';
import { View , TouchableNativeFeedback} from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene11 } from '../legendTextFile';

const scene11JSON = require('../../../assets/animations/page11/page_11.json');
const narrationScene11 = require('../../../assets/sound/narration/Page11/Page11.mp3');
const pigs = require('../../../assets/animations/page11/pigs.json');
const wolf = require('../../../assets/animations/page11/wolf.json');

export default function PageEleven({navigation}) {

    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene11));
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
                source={scene11JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />

            <LottieView
                source={pigs}
                autoPlay={true}
                loop={true}
                style={styles.view_pigs}
            />

            <LottieView
                source={wolf}
                autoPlay={true}
                loop={true}
                style={styles.view_wolf}
            />

            <LayoutPages>
                {/* botoes aqui*/}

                <LegendCaptionArea text={textScene11} />
                
                {loadingButtonNavigation && <ButtonNavigation  proxRoute="PageTwelve" navigation={navigation}showComponent={true}/>}

            </LayoutPages>
        </View >
    )
}