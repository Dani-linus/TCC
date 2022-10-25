// Contexto do som ambiente
import React, { createContext, useState} from "react";
import { Audio } from 'expo-av';

export const SoundNarrationContext = createContext({});

function SoundNarrationProvider({children}){

    const audio = new Audio.Sound();
    const [sound, setSound] = useState(true);
    const [soundStatus, setSoundStatus] = useState({
        status: null,
        isPlaying: false,
    });

    const playSound = async () => {
       await audio.playAsync();
    }
    const stopSound = async () => {
        await audio.stopAsync();
    }
    async function initNarrationSound(som){
        try {
            if (sound === true) {
                setTimeout(() => {
                audio.loadAsync((som) , { shouldPlay: true });
            }, 4000);
              await audio.unloadAsync();
        }
        } catch (error) {
            
        }
    
    }
    return(
        <SoundNarrationContext.Provider value={{playSound, stopSound, initNarrationSound, sound,setSound}}>
            {children}
        </SoundNarrationContext.Provider>
    )
}

export default SoundNarrationProvider;