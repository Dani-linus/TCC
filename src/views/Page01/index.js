//Página 1 do livro
import React, { useState, useRef, useEffect } from 'react';
import { Text, View, ImageBackground, TouchableNativeFeedback, Animated, Image } from 'react-native';
import styles from '../../styles/StyleViewPageOne';
import LegendCaptionArea from '../../components/LegendTextArea';
import LottieView from 'lottie-react-native';
import LayoutPages from '../../components/LayoutPages';

export default function PageOne() {
    // Para cada animação, precisa de um ref distinto
    let animation_pig_mom = React.createRef()
    let animation_pig_spleeping = React.createRef()

    // //Iniciando Animação
    // function startAnimation() {
    //     animation.current.play();
    // }
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
        animation_pig_spleeping.current?.play();
    }
    return (
        <View style={styles.container}>
                <LottieView
                    source={require('../../../assets/animations/page1/page_1.json')}
                    autoPlay={true}
                    loop={true}
                    style={styles.view_animation_cover}
                    >
                </LottieView>
                
                    <LayoutPages>
                    {/* Elemento de interação 1 */}
                        <TouchableNativeFeedback onPress={startAnimationPigMom}
                            touchSoundDisabled={true}>
                            <LottieView
                                style={styles.view_pig_mom}
                                source={require('../../../assets/animations/page1/pig_mom.json')}
                                ref={animation_pig_mom}>
                            </LottieView>
                        </TouchableNativeFeedback>

                    {/* Elemento de interação 2 */}
                        <TouchableNativeFeedback onPress={startAnimationPigSleeping} >
                            <LottieView
                                style={[styles.view_pig_sleepling]}
                                source={require('../../../assets/animations/page1/pig_sleepling.json')}
                                ref={animation_pig_spleeping}>
                            </LottieView>
                        </TouchableNativeFeedback>

                <LegendCaptionArea text={'Era uma vez três porquinhos que viviam com seus pais nos campos encantados.' + "\n" +
                    'Os porquinhos estavam muito felizes, mas conforme cresciam,'+ '\n '+' se tornavam cada vez mais independentes...'}>
                </LegendCaptionArea>
        </LayoutPages>
            </View >
    )
}

