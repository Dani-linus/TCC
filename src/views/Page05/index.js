import React ,{ useContext, useEffect , useState} from 'react';
import { View } from 'react-native';
import styles from './style';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import LegendCaptionArea from 'components/LegendTextArea';
import ButtonNavigation from 'components/ButtonNavigation';
import { textScene5 } from 'views/legendTextFile';
import { SoundNarrationContext } from "contextAPI/soundNarration";

const scene5JSON = require('../../../assets/animations/page5/page_5.json');
const presentationPigJSON =  require('../../../assets/animations/page5/presentation_pig_beto.json')
const narrationScene5 = require('../../../assets/sound/narration/Page05/Page5.mp3');

export default function PageFive({ navigation }) {


    const { initNarrationSound } = useContext(SoundNarrationContext);
    const [loadingButtonNavigation, setloadingButton] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', () => initNarrationSound(narrationScene5));
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
                source={scene5JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
            />
            <LottieView
                source={presentationPigJSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                style={styles.presentation}
            />

            <LayoutPages>

                <LegendCaptionArea text={textScene5} />

                {loadingButtonNavigation && <ButtonNavigation proxRoute="PageSix" navigation={navigation} showComponent={true} />}

            </LayoutPages>
        </View >
    )
}