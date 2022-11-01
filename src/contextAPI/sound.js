// Contexto do som ambiente
import React, { createContext, useState, useEffect, useRef} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){
    
    const audioObject = useRef(new Audio.Sound());
    const [soundStatus, setSoundStatus] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
    async function playSound () {
        if(isPlaying === false){
            try {
                await audioObject.current.playAsync();
                setSoundStatus(true);
                setIsPlaying(true);
                    
            } catch (error) {
                console.log(error)
            }
        }
    }

    // pause audio
    async function stopSound (){
        try {
            await audioObject.current.stopAsync();
            setSoundStatus(false);
            setIsPlaying(false);
        } catch (error) {
            console.log('Não foi possivel pausar o audio:', error)
        }
    }

    async function initSound(){
        if(isLoaded === false){
            try {
                await audioObject.current.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'), {shouldPlay: true, isLooping: true, volume: 1});
                console.log('')
                setIsLoaded(true);
                setIsPlaying(true);
                setSoundStatus(true)
            } catch (error) {
                console.log('O som já está carregado');
            }
        }
    }
    
    useEffect(() => {
        return () => audioObject.current.unloadAsync();
      }, []);

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, soundStatus}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;