import React from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import styles from './style';
import LegendCaptionArea from '../../components/LegendTextArea';
import ButtonNavigation from '../../components/ButtonNavigation';
import LayoutPages from '../../components/LayoutPages';

import { textScene12 } from '../legendTextFile';

const wolfPage12 = require('../../../assets/animations/page12/wolf_page_12.json');
// const scene12JSON = require('')

export default function PageTwelve({navigation}) {

    const animation_wolf = React.createRef();

    function wolfMotionControl(){
        // lobo sobra tres vezes a casa até cansar
        for ( var i=0; i < 3; i++){
            animation_wolf.current?.play(0,300);
        }
        animation_wolf.current?.play();

    }
    return (
        <View style={styles.container}>
            {/* <LottieView
                source={scene12JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                /> */}

            <LayoutPages>
                {/* ... */}

                {/* adicionar um botão em volta da animação e chamar esta função wolfMotionControl*/}
                <LottieView
                    source={wolfPage12}
                // autoPlay={true}
                // loop={true}
                // resizeMode='cover'
                />

                <LegendCaptionArea text={textScene12} />
                
                <ButtonNavigation  proxRoute="PageThirteen" navigation={navigation}showComponent={true}/>

            </LayoutPages>
        </View >
    )
}