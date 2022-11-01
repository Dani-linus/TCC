// Contexto do som ambiente
import React, { createContext, useState } from "react";
import { Audio } from 'expo-av';

export const SoundNarrationContext = createContext({});

function SoundNarrationProvider({ children }) {

    const audio = new Audio.Sound();
    const [sound, setSound] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    const playSound = async () => {
        await audio.playAsync();
    }
    const stopSoundNarration = async () => {
        await audio.stopAsync();
        await audio.unloadAsync();
    }

    const descarregarSound = async () => {
        await audio.unloadAsync();
    }

    async function initNarrationSound(som) {
        
          try{
            if (sound === true & isLoaded == false) {
                setTimeout(() => {
                    audio.loadAsync((som), { shouldPlay: true, volume: 1 });

                }, 4000);
              //  await audioObject.playAsync();
              ///  audio.setOnPlaybackStatusUpdate(null);
                setIsLoaded(true);
                await audio.unloadAsync();
          
            }else if( sound == false & isLoaded == true){
                await audio.stopAsync();
                setIsLoaded(false);
                await audio.unloadAsync();
            }
        }catch(error){
            console.log('Erro ao executar audio:', error)
        }
        }

        return (
            <SoundNarrationContext.Provider value={{ descarregarSound, playSound, stopSoundNarration, initNarrationSound, sound, setSound }}>
                {children}
            </SoundNarrationContext.Provider>
        )
    }

    export default SoundNarrationProvider;