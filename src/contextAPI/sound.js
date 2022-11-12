import React, { createContext, useState, useEffect, useRef } from "react";
import { Audio } from 'expo-av';

export const SoundContext = createContext({});

function SoundProvider({ children }) {

    const audioObject = useRef(new Audio.Sound());
    const soundEffects = useRef(new Audio.Sound());
    const [isLoaded, setIsLoaded] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);

    async function playSound() {
        try {
            if (isPlaying === false && isLoaded === true) {
                await audioObject.current.playAsync();
                setIsPlaying(true);
            }
        } catch (error) {
            setIsPlaying(false);
            console.log(error)
        }
    }

    async function updateVolumSound() {
        audioObject.current.setVolumeAsync(0.1);
    }
    // pause audio
    async function stopSound() {
        try {
            if (isPlaying === true) {
                await audioObject.current.stopAsync();
                setIsPlaying(false);
            }
        } catch (error) {
            console.log('STOP SOUND: Não foi possivel pausar o audio:', error)
        }
    }

    async function initSound() {
        try {
            if (isLoaded === false) {
                await audioObject.current.loadAsync(require('../../assets/sound/ambientSound/ambient_sound_two.mp3'), { shouldPlay: true, isLooping: true, volume: 1 });
                setIsLoaded(true);
                setIsPlaying(true);
            }
        } catch (error) {
            console.log('INIT SOUND: Não é possível concluir a operação porque o som não está carregado');
        }
    }

    async function initSoundEffects(soundEffect) {

        let statusSom = await soundEffects.current.getStatusAsync();
        try {
            if (statusSom.isLoaded === false) {
                await soundEffects.current.loadAsync(soundEffect, { shouldPlay: true, isLooping: true });
            }
        } catch (error) {
            console.log(error);
        }
    }

    async function playSoundEffects() {
        soundEffects.current.unloadAsync();
        try {
            setTimeout(() => {
                soundEffects.current.loadAsync(require('../../assets/sound/soundEffects/blowing.mp3'), { volume: 0.5, shouldPlay: true });
            }, 1500);
        } catch (error) {
            console.log('Erro ao executar audio:', error)
        }
    }

    // pause audio soundEffects
    async function stopSoundEffects() {

        let statusSom = await soundEffects.current.getStatusAsync();
        try {
            if (statusSom.isLoaded == true) {
                await soundEffects.current.stopAsync();
                soundEffects.current.unloadAsync();
            }
        } catch (error) {
            console.log('STOP SOUND: Não foi possivel pausar o audio:', error)
        }
    }
    return (
        <SoundContext.Provider value={{ playSound, stopSound, initSound, updateVolumSound, isLoaded, isPlaying, playSoundEffects, stopSoundEffects, initSoundEffects}}>
            {children}
        </SoundContext.Provider>
    )
}

export default SoundProvider;
