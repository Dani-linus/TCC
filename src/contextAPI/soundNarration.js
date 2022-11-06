// Contexto do som ambiente
import React, { createContext, useState, useRef, useEffect } from "react";
import { Audio } from 'expo-av';

export const SoundNarrationContext = createContext({});

function SoundNarrationProvider({ children }) {

  // const audio = new Audio.Sound();
  const audio = useRef(new Audio.Sound());
  const [sound, setSound] = useState(true);
  const soundStatusNarration = useRef();
  const [isLoaded, setIsLoaded] = useState(false);

  const playSound = async () => {
    await audio.playAsync();
  }
  const stopSoundNarration = async () => {
    let statusSom = await audio.current.getStatusAsync();
    try {
      if (statusSom.isLoaded == true) {
        await audio.current.stopAsync()
        await audio.current.unloadAsync();
      }
    } catch (error) {
      console.log('Erro ao pausar o audio', error)
    }
  }

  async function initNarrationSound(som) {
    
    audio.current.unloadAsync();
 //   console.log('STATUS SOM ',sound)

 soundStatusNarration.current = sound;
    try {
      if (soundStatusNarration.current === true) {
        setTimeout(() => {
          audio.current.loadAsync((som), { volume: 1, shouldPlay: true });
        }, 4000);
      }
    } catch (error) {
      console.log('Erro ao executar audio:', error)
    }
  }

  return (
    <SoundNarrationContext.Provider value={{ playSound, stopSoundNarration, initNarrationSound, sound, setSound,soundStatusNarration}}>
      {children}
    </SoundNarrationContext.Provider>
  )
}

export default SoundNarrationProvider;