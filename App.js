import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack'
import * as Font from 'expo-font';
import { StatusBar } from 'expo-status-bar';

import HomeView from './src/assets/view/HomeView';

const Stack = createStackNavigator();

let PatrickHandCustomFont = {
  'PatrickHand': require('./src/assets/font/PatrickHand-Regular.ttf')
};

export default class App extends React.Component {
  constructor(props) {
    super(props);

  }
  state = {
    fontsLoaded: false,
  };

  async _loadFontsAsync() {
    await Font.loadAsync(PatrickHandCustomFont);
    this.setState({ fontsLoaded: true });
  }

  //CARREGANDO A FONTE PERSONALIZADA E O SOM AMBIENTE
  async componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return null;
    }
    return (
      <NavigationContainer>
          <StatusBar hidden></StatusBar>
          <Stack.Navigator  initialRouteName='HomeView' screenOptions={{
            headerShown: false, gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
          }}>
            <Stack.Screen name="HomeView" component={HomeView} />
            {/* <Stack.Screen name="Menu" component={Menu} /> */}
            {/* <Stack.Screen name="Loading" component={Loading} /> */}
            {/* <Stack.Screen name="ModalInfo" component={ModalInfo} /> */}
          </Stack.Navigator>
        </NavigationContainer>
    );
  }
}