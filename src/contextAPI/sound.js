// Contexto do som ambiente
import React, { createContext, useState, useEffect} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){
    
    const audioObject = new Audio.Sound();
    const [soundStatus, setSoundStatus] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
    async function playSound () {
        console.log('>>>playSound');
        if(isLoaded === true){
            if(isPlaying === false){
                try {
                    await audioObject.playAsync();
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
                    await audioObject.stopAsync();
                    console.log('pausou o audio');
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
                await audioObject.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'), {shouldPlay: true, isLooping: true, volume: 1});
                const statusAudio = await audioObject.playAsync();
                setIsLoaded(true);
                setIsPlaying(true);
                setTimeout(() => {
                    audioObject.unloadAsync()
                }, statusAudio.playableDurationMillis);
            } catch (error) {
                console.log('O som já está carregado');
            }
        }
    }
    

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, soundStatus}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;