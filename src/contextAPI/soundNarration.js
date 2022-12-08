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
    }
  }

  const stopSoundNarration = async () => {
    let statusSom = await audio.current.getStatusAsync();
    try {
      if (statusSom.isLoaded == true) {
        await audio.current.stopAsync()
      }
    } catch (error) {
    }
  }

  useEffect(() => {
    return () => audio.current.unloadAsync();
  }, [])

  const unloadSoundNarration = async () => {
    let statusSom = await audio.current.getStatusAsync();
    try {
      if (statusSom.isLoaded == true) {
        await audio.current.unloadAsync();
      }
    } catch (error) {
    }
  }

  async function initNarrationSound(som) {
    audio.current.unloadAsync();
    try {
      if (soundStatusNarration.current === true) {
        setTimeout(() => {
          audio.current.loadAsync((som), { volume: 1, shouldPlay: true });
        }, 3000);
        audio.current.unloadAsync();
      }
    } catch (error) {
    }
  }

  return (
    <SoundNarrationContext.Provider value={{ playSoundNarration, stopSoundNarration, initNarrationSound, soundStatusNarration, unloadSoundNarration }}>
      {children}
    </SoundNarrationContext.Provider>
  )
}

export default SoundNarrationProvider;