// Contexto do som ambiente
import React, { createContext, useState, useEffect } from "react";
import { Audio } from "expo-av";

export const SoundContext = createContext({});

function SoundProvider({ children }) {

  const audioObject = new Audio.Sound();
  const [soundStatus, setSoundStatus] = useState({
    status: null,
    isPlaying: false,
    });

  const playSound = async () => {
    if(!soundStatus.isPlaying){
        try {
            await audioObject.playAsync();
            setSoundStatus({isPlaying: true});

        } catch (error) {
            console.log(error)        
        }
    }
  }
  
  const stopSound = async () => {
    if(soundStatus.isPlaying){
        try {
            await audioObject.stopAsync();
            await audioObject.unloadAsync();
            setSoundStatus({isPlaying: false});

        } catch (error) {
            console.log(error)
        }
    }
  }

  async function initSound(){
    if(!soundStatus.isPlaying){
        try {
            await audioObject.loadAsync(
            require("../../assets/sound/ambientSound/ambient_sound_two.mp3"),
            { shouldPlay: true, isLooping: true, volume: 1 });
        } catch (error) {
            console.log(error)
        }
        // armazenar o volume para controlar com a narração.
    }
  }

  return (
    <SoundContext.Provider value={{ initSound, playSound, stopSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
