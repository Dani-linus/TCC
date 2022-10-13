import React ,{useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import HomeView from './src/assets/view/HomeView';
import ModalInfo from './src/assets/components/ModalInfo'; 
import ModalOptions from './src/assets/components/ModalOptions'; 
import PageOne from './src/assets/view/pages/PageOne';
import {Audio} from 'expo-av';
import { SafeAreaView } from 'react-native';

const Stack = createStackNavigator();

export default function App () {

  const [sound, setSound] = useState();

  const [fontsLoaded] = useFonts({
    'PatrickHand': require('./src/assets/font/PatrickHand-Regular.ttf'),
    'FuzzyBubbles-Bold' : require('./src/assets/font/FuzzyBubbles-Bold.ttf'),
  });

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync( require('./src/assets/sound/ambientSound/ambient_sound_two.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  } 

  if(!fontsLoaded){
    return null;
  }
    return (
      // <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
            <StatusBar hidden></StatusBar>
            <Stack.Navigator initialRouteName='HomeView' screenOptions={{
              headerShown: false, gestureEnabled: true,
              gestureDirection: "horizontal",
              cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
            }}>
              <Stack.Screen name="HomeView" component={HomeView} />
              <Stack.Screen name="PageOne" component={PageOne} />
              <Stack.Screen name="ModalInfo" component={ModalInfo}/>
              <Stack.Screen name="ModalOptions" component={ModalOptions} />
            </Stack.Navigator>
        </NavigationContainer>
      // </SafeAreaView>
    );
  }
