// Contexto do som ambiente
import React, { createContext, useState} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){

    const audio = new Audio.Sound();

    const [sound, setSound] = useState(false);
    const [soundStatus, setSoundStatus] = useState({
        status: null,
        isPlaying: false,
    });
    

    const playSound =  async () => {
        // play sound
        await audio.replayAsync();
        // if (soundStatus.status?.isLoaded && !soundStatus.isPlaying) {
        //     // setSoundStatus({ status: status, isPlaying: true});
        // }
    }

    const stopSound = async () => {
        await audio.stopAsync();
        // pause audio
        // if (soundStatus.status?.isLoaded && soundStatus.isPlaying) {
        //     // setSoundStatus({ status: status, isPlaying: false});
        // }
    }
    async function initSound(){
        // quando abre a aplicação pela primeira vez
        if (soundStatus.status === null) {
            audio.loadAsync
              (require('../../assets/sound/ambientSound/ambient_sound_two.mp3'),
              { shouldPlay: true }
            );
            // setSoundStatus({ status: status, isPlaying: true });
        }
    }

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, soundStatus}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;