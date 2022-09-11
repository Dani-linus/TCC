import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Menu from './view/Menu';
import Splash from './view/Splash';
import Configuracoes from './view/Configuracoes'
import Cena1 from './scenes/Cena1';
import Loading from './view/Loading';
import Cena2 from './scenes/Cena2';
import TesteSom from './view/TesteSom';
import Sobre from './view/Sobre'

const Stack = createStackNavigator();

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Loading" component={Loading}/>
          <Stack.Screen name="Configuracoes" component={Configuracoes}/>
          <Stack.Screen name="TesteSom" component={TesteSom}/>
           <Stack.Screen name="Cena2" component={Cena2}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}