//Página 2 do livro
import React from 'react';
import { View ,TouchableNativeFeedback} from 'react-native';
import styles from '../../views/Page02/style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';

export default function PageTwo() {
    // Para cada animação, precisa de um ref distinto

    let animation_pig_father_pig_mom = React.createRef()

    function startAnimationPigFatherPigMom(){
        animation_pig_father_pig_mom.current?.play();
    }

    return (
        <View style={styles.container}>
                {/* animação de background */}
                <LottieView
                    source={require('../../../assets/animations/page2/page_2.json')}
                    autoPlay={true}
                    loop={true}
                    style={styles.view_animation_cover}>
                </LottieView>
                <LayoutPages>
                    {/* Elemento de interação 1 */}
                        <View style={styles.view_pig_father_pig_mom}>
                        <TouchableNativeFeedback onPress={startAnimationPigFatherPigMom}>
                            <LottieView
                               style={styles.animation_view_pig_father_pig_mom}
                                source={require('../../../assets/animations/page2/pig_father_pig_mom.json')}
                                ref={animation_pig_father_pig_mom}>
                            </LottieView>
                        </TouchableNativeFeedback>
                        </View>
                <LegendCaptionArea text={'Então chegou o dia em que saíram da casa de seus pais para morar sozinhos.'+ "\n" +
'Os três porquinhos partiram para o bosque em busca de um bom lugar para construir, cada um, a sua casa.'} />
                </LayoutPages>
        </View >
    )
}

