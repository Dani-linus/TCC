// Contexto do som ambiente
import React, { createContext, useState, useEffect} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){
    
    const audioFILE = new Audio.Sound();
    const [soundStatus, setSoundStatus] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
    async function playSound () {
        console.log('>>>playSound');
        if(isLoaded === true){
            if(isPlaying === false){
                try {
                    await audioFILE.playAsync();
                    setSoundStatus(true);
                    setIsPlaying(true);
                        
                } catch (error) {
                    console.log(error)
                }
            }
        }
    }

    // pause audio
    async function stopSound (){
        console.log('>>>stopSound');
        if(isLoaded === true){
            if(isPlaying === true){
                try {
                    await audioFILE.pauseAsync();
                    console.log('tentou pausar o audio');
                    setSoundStatus(false);
                    setIsPlaying(false);
                } catch (error) {
                    console.log('Não foi possivel pausar o audio:', error)
                }
            }
        }

    }

    async function initSound(){
        if(isLoaded === false){
            try {
                await audioFILE.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'), {shouldPlay: true, isLooping: true, volume: 1});
                setIsLoaded(true);
                setIsPlaying(true);
            } catch (error) {
                console.log('O som já está carregado');
            }
        }else{
            console.log(audioFILE)
        }
    }

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, soundStatus}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;