import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import Routes from './src/views/routes';
import SoundProvider from './src/contexts/sound';
export default function App () {

  const [fontsLoaded] = useFonts({
    'PatrickHand': require('./assets/font/PatrickHand-Regular.ttf'),
    'FuzzyBubbles-Bold' : require('./assets/font/FuzzyBubbles-Bold.ttf'),
  });

  if(!fontsLoaded){
    return null;
  }
    return (
      // <SafeAreaView>
        <NavigationContainer>
          <StatusBar hidden></StatusBar>
          <SoundProvider>
            <Routes/>
          </SoundProvider>
        </NavigationContainer>
      // </SafeAreaView>
    );
  }
