// Contexto do som ambiente
import React, { createContext, useState, useEffect, useRef} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){
    
    const audioObject = useRef(new Audio.Sound());
    const [soundStatus, setSoundStatus] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
    async function playSound () {
        if(isPlaying === false){
            try {
                await audioObject.current.playAsync();
                setSoundStatus(true);
                setIsPlaying(true);
                setSoundStatus(true);
                    
            } catch (error) {
                console.log(error)
            }
        }
    }

    async function updateVolumSound(){
        audioObject.current.setVolumeAsync(0.1);
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
                audioObject.current.unloadAsync();
                await audioObject.current.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'), {shouldPlay: false, isLooping: true, volume: 1});
                setIsLoaded(true);
                setIsPlaying(false);
                setSoundStatus(false)
            } catch (error) {
                console.log('Não é possível concluir a operação porque o som não está carregado');
            }
        }
    }

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, soundStatus, updateVolumSound, isLoaded}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;
