//Página 2 do livro
import React from 'react';
import { View, TouchableNativeFeedback } from 'react-native';
import styles from '../../views/Page02/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';
import ButtonNavigation from '../../components/ButtonNavigation'

const pigMomPigFatherJSON = require('../../../assets/animations/page2/pig_father_pig_mom.json')
const sceneBackgroundJSON = require('../../../assets/animations/page2/page_2.json')

export default function PageTwo({navigation}) {
    let animation_pig_father_pig_mom = React.createRef()

    function startAnimationPigFatherPigMom() {
        animation_pig_father_pig_mom.current?.play();
    }
    return (
        <View style={styles.container}>
            <LottieView
                source={sceneBackgroundJSON}
                autoPlay={true}
                loop={true}
                style={styles.view_animation_cover}>
            </LottieView>

            <LayoutPages>
                <View style={styles.view_pig_father_pig_mom}>
                    <TouchableNativeFeedback onPress={startAnimationPigFatherPigMom}>
                        <LottieView
                            source={pigMomPigFatherJSON}
                            ref={animation_pig_father_pig_mom}>
                        </LottieView>
                    </TouchableNativeFeedback>
                </View>
                <LegendCaptionArea text={'Então chegou o dia em que saíram da casa de seus pais para morar sozinhos.' + "\n" +
                    'Os três porquinhos partiram para o bosque em busca' + '\n' + 'de um bom lugar para construir, cada um, a sua casa.'} />
                <ButtonNavigation proxRoute="PageThree" navigation={navigation}/>                                    
            </LayoutPages>
        </View >
    )
}

