import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/views/routes';
import SoundProvider from './src/contextAPI/sound';
import SoundNarrationProvider from './src/contextAPI/soundNarration'
export default function App() {

  const [fontsLoaded] = useFonts({
    'PatrickHand': require('./assets/font/PatrickHand-Regular.ttf'),
    'FuzzyBubbles-Bold': require('./assets/font/FuzzyBubbles-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <StatusBar hidden></StatusBar>
      <SoundProvider>
        <SoundNarrationProvider>
          <Routes />
        </SoundNarrationProvider>
      </SoundProvider>
    </NavigationContainer>
  );
}
