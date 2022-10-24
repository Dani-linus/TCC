//Página 1 do livro
import React, { useRef , useContext , useEffect } from 'react';
import {View, TouchableNativeFeedback, Text, TouchableOpacity} from 'react-native';
import styles from './style';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';
import ButtonNavigation from '../../components/ButtonNavigation';
import { SoundNarrationContext } from "../../contextAPI/soundNarration";
import { SoundContext } from "../../contextAPI/sound";

// imports das animações em JSON
const pigMomJSON = require('../../../assets/animations/page1/pig_mom.json');
const pigSleepingJSON = require('../../../assets/animations/page1/pig_2.json') ;
const fileJSON = require('../../../assets/animations/page1/page_1.json');

// const sceneJSON = require('../../../assets/animations/page1/pageOneScene.json');

//Narração primeira cena
const soundCena1 =  require('../../../assets/sound/narration/Page01.mp3');

export default function PageOne({navigation}) {

    const {initNarrationSound, playSound} = useContext(SoundNarrationContext);
    const {stopSound}  = useContext(SoundContext);

    //Parando o som ambiente
    stopSound();

    useEffect(() => {
     navigation.addListener('focus', ()=> initNarrationSound(soundCena1));
    }
    );

    //Iniciando narração
    initNarrationSound(soundCena1);
     
     
      

      
   
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
            <LottieView
                source={fileJSON}
                autoPlay={true}
                loop={true}
                resizeMode='cover'
                />
            <LayoutPages navigation={navigation}>
                {/* Elemento de interação 1 */}
                    <View style={styles.view_pig_mom}>
                        <TouchableNativeFeedback onPress={startAnimationPigMom}>
                            <LottieView
                                // style={styles.view_pig_mom}
                                source={pigMomJSON}
                                ref={animation_pig_mom}
                                >
                            </LottieView>
                        </TouchableNativeFeedback>
                    </View>

                {/* Elemento de interação 2 */}
            <View style={styles.view_pig_sleepling}>
                <TouchableNativeFeedback onPress={startAnimationPigSleeping}>
                    <LottieView
                        source={pigSleepingJSON}
                        ref={animation_pig_spleeping}>
                    </LottieView>
                </TouchableNativeFeedback>
            </View>

            {/* legenda da historia desta pagina */}
            <LegendCaptionArea text={'Era uma vez três porquinhos que viviam com seus pais nos campos encantados. Os porquinhos estavam muito felizes, e conforme cresciam, se tornavam cada vez mais independentes...'}>
            </LegendCaptionArea>
            {/* botao para navegação entre as páginas */}
            <ButtonNavigation proxRoute="PageTwo" navigation={navigation}/>
            </LayoutPages>
        </View >
    )
}

