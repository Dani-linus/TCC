import React , {useEffect,useContext}from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/views/routes';
import SoundProvider from './src/contextAPI/sound';
import SoundNarrationProvider from './src/contextAPI/soundNarration';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {

  NavigationBar.setVisibilityAsync('hidden');

  return (
    <NavigationContainer>
      <StatusBar hidden/>
      <SoundProvider>
        <SoundNarrationProvider>
          <Routes />
        </SoundNarrationProvider>
      </SoundProvider>
    </NavigationContainer>
  );
}
