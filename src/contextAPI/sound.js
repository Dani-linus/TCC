// Contexto do som ambiente
import React, { createContext, useState, useEffect} from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({children}){

    // const audio = new Audio.Sound();
    const [sound, setSound] = useState(new Audio.Sound());
    const [soundStatus, setSoundStatus] = useState(false);

    const playSound = async () => {
       await sound.replayAsync();
       setSoundStatus(true);
    }

    // pause audio
    const stopSound = async () => {
        if(sound.isPlaying === true){
            await sound.stopAsync();
            setSoundStatus(false);
            // descarregar o audio da memoria
            sound.unloadAsync();
        }
    }

    // quando abre a aplicação pela primeira vez
    async function initSound(){
        sound.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'));
        setSound(sound);
        playSound();
    }

    useEffect(() => {
        if(soundStatus){
            playSound();
            console.log('Status do audio:', soundStatus)
        }else{
            stopSound();
        }
      }, [soundStatus]);

    return(
        <SoundContext.Provider value={{playSound, stopSound, initSound, soundStatus, setSoundStatus}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;