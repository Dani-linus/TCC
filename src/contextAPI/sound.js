// Contexto do som ambiente
import React, { createContext, useState, useEffect} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){

    const audioFILE = new Audio.Sound();
    const [soundStatus, setSoundStatus] = useState(false);
    
    const playSound = async () => {
        console.log('>>>playSound');
        try {
            if(soundStatus === false && audioFILE._loaded !== false){
                console.log(audioFILE._loaded)
                await audioFILE.playAsync();
                setSoundStatus(true);
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    // pause audio
    const stopSound = async () => {
        console.log('>>>stopSound');
        try {
            if(soundStatus == true){
                await audioFILE.pauseAsync();
                console.log('tentou pausar o audio');
                
                setSoundStatus(false);
            }
        } catch (error) {
            console.log('Não foi possivel pausar o audio:', error)
        }

    }

    async function initSound(){
        console.log('>>>initSound');
        console.log(audioFILE._loaded)
        try {
            if(audioFILE._loaded === false && soundStatus === false){
                await audioFILE.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'))
                await audioFILE.setIsLoopingAsync(true);
                setSoundStatus(true);
                playSound();
            }
            
            console.log(audioFILE._loaded)
            console.log('initSound > soundStatus:', soundStatus)

        } catch (error) {
            console.log('O som já está carregado');
        }
    }

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, soundStatus}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;