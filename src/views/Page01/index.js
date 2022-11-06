//Página 1 do livro
import React, { useRef , useContext , useEffect} from 'react';
import {View, TouchableNativeFeedback} from 'react-native';
import styles from './style';
import * as Animatable from 'react-native-animatable';
import LegendCaptionArea from 'components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from 'components/LayoutPages';
import ButtonNavigation from 'components/ButtonNavigation';
import { SoundContext } from 'contextAPI/sound';
import { SoundNarrationContext } from "contextAPI/soundNarration";
import { textScene1 } from 'views/legendTextFile';

// imports dos arquivos JSON das animações
const pigMomJSON = require('../../../assets/animations/page1/pigMom.json');
const pigSleepingJSON = require('../../../assets/animations/page1/pigSleeping.json');
const scene1JSON = require('../../../assets/animations/page1/page_1.json');
const narrationScene1 =  require('../../../assets/sound/narration/Page01/Page1.mp3');

export default function PageOne({navigation}) {

    const {initNarrationSound, sound} = useContext(SoundNarrationContext);
    const {updateVolumSound} = useContext(SoundContext);
  
   useEffect(() => {
        navigation.addListener('focus', ()=> initNarrationSound(narrationScene1));
        updateVolumSound();
    }, []);
    
    const animation_pig_mom = useRef();
    const animation_pig_spleeping = useRef();

    // //Iniciando o estado 0 das animações
    animation_pig_spleeping.current?.play(0,148);
    animation_pig_mom.current?.play(0, 48);

    // Inicia a animação da mamãe porca
    function startAnimationPigMom(){
        // adicionar verificação de cliques
        // Adicionar loop baseado nos frames (isso eu preciso verificar direito no viewer do Lottie files)
        animation_pig_mom.current?.play();
    }

    // Inicia a animação do porco dormindo
    function startAnimationPigSleeping(){
        //de 0 a 148 - pig dormindo, ou seja, estado zero (isso fica em looping até que seja interagido)
        //de 148 a 300 - reação a interação, estado 1.
        animation_pig_spleeping.current?.play(148, 300);
    }
    return (
       <View style={styles.container}>
            {/* animação de fundo */}
            <LottieView
                source={scene1JSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                style={{flexGrow: 1}}
                />

            <LayoutPages navigation={navigation}>

                {/* Elemento de interação 1 */}
                <View style={styles.view_pig_mom}>
                    <LottieView
                        source={pigMomJSON}
                        ref={animation_pig_mom}>
                    </LottieView>
                </View>

                {/* controle de animação 1 */}
                <TouchableNativeFeedback onPress={startAnimationPigMom}>
                    <Animatable.View style={[styles.toggleView, styles.togglePigMom]} animation="pulse" easing="linear" iterationCount="infinite"/>
                </TouchableNativeFeedback>

                {/* Elemento de interação 2 */}
                <View style={styles.view_pig_sleepling}>
                    <LottieView
                        source={pigSleepingJSON}
                        ref={animation_pig_spleeping}>
                    </LottieView>
                </View>

                {/* controle de animação do item 2 */}
                    <TouchableNativeFeedback onPress={startAnimationPigSleeping}>
                    <Animatable.View style={[styles.toggleView, styles.togglePigSleeping]} animation="pulse" easing="linear" iterationCount="infinite"/>
                </TouchableNativeFeedback>


                {/* legenda da historia desta pagina */}
                <LegendCaptionArea text={textScene1} />

                {/* botao para navegação entre as páginas */}
                <ButtonNavigation proxRoute="PageTwo" navigation={navigation} showComponent={false}/>
            </LayoutPages>
        </View >
    )
}

