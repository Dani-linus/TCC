import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

// import { createStackNavigator } from '@react-navigation/stack'

// limpar código

import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'

import Menu from './view/Menu';
import Splash from './view/Splash';
import Configuracoes from './view/Configuracoes'
import Cena1 from './scenes/Cena1';
import Loading from './view/Loading';
import Cena2 from './scenes/Cena2';
import Sobre from './view/Sobre';
import * as Font from 'expo-font';
import {ViewPropTypes} from 'deprecated-react-native-prop-types';

const Stack = createStackNavigator();

let customFonts = {
  'PatrickHand': require('./fonts/PatrickHand-Regular.ttf')
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  //CARREGANDO A FONTE E O AUDIO
  async componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerShown: false, gestureEnabled: true,
          gestureDirection: "horizontal",
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
        }}>
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="Sobre" component={Sobre} />
          <Stack.Screen name="Configuracoes" component={Configuracoes} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}