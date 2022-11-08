// Contexto do som ambiente
import React, { createContext, useState, useEffect, useRef} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){
    
    const audioObject = useRef(new Audio.Sound());
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    
    async function playSound () {
        try {
            if(isPlaying === false && isLoaded === true){
                console.log("play sound >>>")
                await audioObject.current.playAsync();
                setIsPlaying(true);
            }
            } catch (error) {
                console.log("erro no play sound >>>")
                setIsPlaying(false);
                console.log(error)
            }
    }

    async function updateVolumSound(){
        audioObject.current.setVolumeAsync(0.1);
    }

    // pause audio
    async function stopSound (){
        try {
            if(isPlaying === true){
                await audioObject.current.stopAsync();
                console.log("stop sound >>>")
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('STOP SOUND: Não foi possivel pausar o audio:', error)
        }
    }

    async function initSound(){
        try {
            if(isLoaded === false){
                console.log("init sound object>>>")
                await audioObject.current.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'), {shouldPlay: true, isLooping: true, volume: 1});
                setIsLoaded(true);
                setIsPlaying(true);
                }
            } catch (error) {
                console.log('INIT SOUND: Não é possível concluir a operação porque o som não está carregado');
            }
    }

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, updateVolumSound, isLoaded, isPlaying}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;
