// Contexto do som ambiente
import React, { createContext, useState , useRef, useEffect} from "react";
import { Audio } from 'expo-av';

export const SoundNarrationContext = createContext({});

function SoundNarrationProvider({ children }) {

   // const audio = new Audio.Sound();
    const audio = (new Audio.Sound());
    const [sound, setSound] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);
    
    const playSound = async () => {
        await audio.playAsync();
    }
    const stopSoundNarration = async () => {
        await audio.stopAsync();
        await audio.unloadAsync();
    }

    useEffect(() => {
        return () => audio.unloadAsync();
      }, []);

    async function initNarrationSound(som) {
       
          try{
            if (sound === true) {
                setTimeout(() => {
                    audio.loadAsync((som), { shouldPlay: true, volume: 1 });
                     console.log(audio)
                }, 4000);
              //  await audioObject.playAsync();
              ///  audio.setOnPlaybackStatusUpdate(null);
                setIsLoaded(true);
              //  await audio.current.unloadAsync();
          
            }else if( sound == false){
                await audio.stopAsync();
                setIsLoaded(false);
              ///  await audio.current.unloadAsync();
            }
        }catch(error){
            console.log('Erro ao executar audio:', error)
        }
        }

        return (
            <SoundNarrationContext.Provider value={{ playSound, stopSoundNarration, initNarrationSound, sound, setSound }}>
                {children}
            </SoundNarrationContext.Provider>
        )
    }

    export default SoundNarrationProvider;