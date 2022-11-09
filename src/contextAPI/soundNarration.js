// Contexto do som ambiente
import React, { createContext, useState, useRef, useEffect } from "react";
import { Audio } from 'expo-av';

export const SoundNarrationContext = createContext({});

function SoundNarrationProvider({ children }) {
  const audio = useRef(new Audio.Sound());
  const soundStatusNarration = useRef(true);
  const [isLoaded, setIsLoaded] = useState(false);
    
  const playSoundNarration = async () => {
     try{
      await audio.current.playAsync();
    
     }catch(error){
      console.log('Erro ao dar play no audio', error);
     }
  }
  const stopSoundNarration = async () => {
    let statusSom = await audio.current.getStatusAsync();
    try {
      if (statusSom.isLoaded == true) {
        await audio.current.stopAsync()
       // await audio.current.unloadAsync();
      }
    } catch (error) {
      console.log('Erro ao pausar o audio', error)
    }
  }

  useEffect(() => {
    return () => audio.current.unloadAsync();
  }, [])


  async function initNarrationSound(som) {

    audio.current.unloadAsync();
    try {
      if (soundStatusNarration.current === true) {
        setTimeout(() => {
          audio.current.loadAsync((som), { volume: 1, shouldPlay: true });
        }, 4000);
        audio.current.unloadAsync();
      }
    } catch (error) {
      console.log('Erro ao executar audio:', error)
    }
  }

  return (
    <SoundNarrationContext.Provider value={{ playSoundNarration, stopSoundNarration, initNarrationSound, soundStatusNarration }}>
      {children}
    </SoundNarrationContext.Provider>
  )
}

export default SoundNarrationProvider;