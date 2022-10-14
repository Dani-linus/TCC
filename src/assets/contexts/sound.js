// Contexto do som ambiente
import React, { createContext, useState} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){

    const [sound, setSound] = useState(null);
    const [soundStatus, setSoundStatus] = useState({
        status: null,
        isPlaying: false,
    });

    async function playSound(){
        if (soundStatus.status?.isLoaded && !soundStatus.isPlaying) {
            const status = await sound.playAsync();
            setSoundStatus({ status: status, isPlaying: true});
        }
    }

    async function pauseSound(){
        // pause audio
        if (soundStatus.status?.isLoaded && soundStatus.isPlaying) {
            const status = await sound.pauseAsync();
            setSoundStatus({ status: status, isPlaying: false});
        }
    }
    async function initSound(){
        // quando abre a aplicação pela primeira vez
        if (soundStatus.status === null) {
            const { sound, status } = await Audio.Sound.createAsync
              (require('./../sound/ambientSound/ambient_sound_two.mp3'),
              { shouldPlay: true }
            );
            setSoundStatus({ status: status, isPlaying: true });
        }
    }

    return(
        <SoundContext.Provider value={{statusSound: false, playSound, pauseSound, initSound}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;