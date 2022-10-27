// Contexto do som ambiente
import React, { createContext, useState} from "react";
import { Audio } from 'expo-av';
import { useEffect } from "react/cjs/react.production.min";

export const SoundContext = createContext({});

function SoundProvider({children}){

    // const audio = new Audio.Sound();
    const [sound, setSound] = useState(new Audio.Sound());
    const [soundStatus, setSoundStatus] = useState(false);

    const playSound = async () => {
       // await audio.replayAsync();
       await sound.replayAsync();
        // if (soundStatus.status?.isLoaded && !soundStatus.isPlaying) {
        //     // setSoundStatus({ status: status, isPlaying: true});
        // }
    }

    // pause audio
    const stopSound = async () => {
        if(sound.isPlaying === true){
            await sound.stopAsync();
            setSoundStatus({
                isPlaying: false
            })
        }
    }

    async function initSound(){
        // quando abre a aplicação pela primeira vez
        if (soundStatus.status === null) {
            // audio.loadAsync( require('../../assets/sound/ambientSound/ambient_sound_two.mp3' ),
            //   { shouldPlay: true }
            // );
            // setSound(audio);
            const { sound } = await Audio.Sound.createAsync( require('../../assets/sound/ambientSound/ambient_sound_two.mp3'));
            setSound(sound);
        }
        playSound();
    }

    useEffect(() => {
        if(soundStatus){
            playSound();
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